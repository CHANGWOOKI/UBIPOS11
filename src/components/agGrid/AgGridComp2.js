import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "./AgGridComp.scss"

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
//import "ag-grid-enterprise"
import Button from "@mui/material/Button";
import "./AgGridComp2.scss"
import ProductSearchPopup from './searchPopup.js'
import "./searchPopup.scss"
// npm install @mui/material @emotion/react @emotion/styled
// npm install ag-grid-react
// npm install ag-grid-community
// import PopupComponent from '../popup/Popup.js'; 
 


function AgGridComponent2() {


    const [rowData, setRowData] = useState([
        {
            번호: 1,
            품번: 'LKJ1WTOH002BR',
            품명: 'OVERSIZE HANDMADE COAT_BROWN',
            TAG가: '',
            색상: 'BROWN',
            매장재고: 0,
            창고재고: 0,
            수량: 0,
            금액: 0,
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '',
            색상: 'DARK GREY',
            매장재고: 0,
            창고재고: 0,
            수량: 0,
            금액: 0,
        },
        // 추가 데이터...
    ]);

    const [showPopup, setShowPopup] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const columnDefs = [{
        headerName: "..HELLO.",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        floatingFilter: false,
        suppressMenu: true,
        minWidth: 50,
        maxWidth: 50,
        width: 50,
        flex: 0,
        resizable: false,
        sortable: false,
        editable: true,
        filter: false,
        suppressColumnsToolPanel: true,
        cellRendererFramework: (params) => (
            <Button onClick={() => handle품번Click(params)}>조회</Button> 
        ),
    },
        { headerName: '번호', field: '번호', width: 80 },
        { headerName: '품번', field: '품번', width: 180 },
        { headerName: '품명', field: '품명', width: 250 },
        { headerName: 'TAG가', field: 'TAG가', width: 100 },
        { headerName: '색상', field: '색상', width: 100 },
        { headerName: '매장재고', field: '매장재고', width: 120 },
        { headerName: '창고재고', field: '창고재고', width: 120 },
        { headerName: '수량', field: '수량', width: 120 },
        { headerName: '금액', field: '금액', width: 120 },
    ];
    const handle품번Click = (params) => {
        setSelectedRow(params.data); // 클릭된 행 데이터 저장
        setShowPopup(true); // 팝업 보여주기
    };

    const handle품번Select = (품번) => {
        if (!selectedRow) {
            console.error("선택된 행이 없습니다."); // 선택된 행이 없을 때 에러 로그 출력
            return; // selectedRow가 없으면 함수 종료
        }
    
        setRowData((prev) =>
            prev.map((row) =>
                row.번호 === selectedRow.번호 ? { ...row, 품번 } : row // 선택된 품번 업데이트
            )
        );
        setShowPopup(false); // 팝업 닫기
    };

    return (
        <div>
        <Button className="button-scss"
            variant="contained" 
            onClick={() => setShowPopup(true)} // 버튼 클릭 시 팝업 열기
        >품번</Button>
        <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
                        <ProductSearchPopup 
                open={showPopup}
                onClose={() => setShowPopup(false)}
                onSelect={handle품번Select}
            />
            <AgGridReact
                        rowData={rowData}
                        rowSelection={"multiple"}
                        suppressRowClickSelection={false}
                        defaultColDef={{
                            editable: true,
                            sortable: true,
                            minWidth: 100,
                         //   filter: true,
                            resizable: true,
                         //   floatingFilter: true,
                            flex: 1,
                        }}
                        columnDefs={columnDefs}
                        sideBar={{
                            toolPanels: ["columns", "filters"],
                            defaultToolPanel: "",
                        }}
                    />

            </div>
         <button className="search-button2">등록</button>  
        </div>
        
    );
}

export default AgGridComponent2;
