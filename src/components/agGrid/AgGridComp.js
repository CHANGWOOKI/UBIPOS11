import React, { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ColumnSettingsModal from './ColumnSettingsModal';
import './AgGridComp.scss'; // SCSS 파일 임포트 추가

const AgGridComponent = ({ rowData, columnDefs }) => {
    const defaultColDef = useMemo(() => ({
        flex: 1,
        minWidth: 100,
        sortable: true,
        filter: false,
    }), []);

    const [showModal, setShowModal] = useState(false);
    const [currentColumnDefs, setCurrentColumnDefs] = useState(columnDefs);
    const [deletedColumns, setDeletedColumns] = useState([]);

    // 컬럼 설정 버튼 클릭 시 모달 열기
    const handleColumnSettings = () => setShowModal(true);

    // 컬럼 정의 변경 시 호출되는 함수
    const onColumnDefsChange = (newColumnDefs) => {
        setCurrentColumnDefs(newColumnDefs);
    };

    // 컬럼 삭제 및 복구 함수
    const handleRemoveColumn = (column) => {
        setDeletedColumns((prev) => [...prev, column]);
        setCurrentColumnDefs((prev) => prev.filter((col) => col.field !== column.field));
    };

    const handleRestoreColumn = (column) => {
        setDeletedColumns((prev) => prev.filter((col) => col.field !== column.field));
        setCurrentColumnDefs((prev) => [...prev, column]);
    };

    // 드랍 함수
    const handleDrop = (e) => {
        e.preventDefault();
        const column = JSON.parse(e.dataTransfer.getData('text/plain'));
        setCurrentColumnDefs((prev) => [...prev, column]);
    };

    // 드래그 오버 함수
    const handleDragOver = (e) => e.preventDefault();

    return (
        <div className="ag-grid-container" onDrop={handleDrop} onDragOver={handleDragOver}>
            <button className='modal-btn' onClick={handleColumnSettings}>열 설정</button>
            <div className="ag-theme-alpine" style={{ height: 570, width: '100%' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={currentColumnDefs}
                    defaultColDef={defaultColDef}
                    animateRows={true}
                    pagination={true}
                    paginationPageSize={11} // 페이지당 항목 수 설정
                    paginationNumberFormatter={function(params) { return params.value; }} // 페이지 번호 포매팅
                />
            </div>
            {showModal && (
                <ColumnSettingsModal
                    columnDefs={currentColumnDefs}
                    deletedColumns={deletedColumns}
                    onClose={() => setShowModal(false)}
                    onColumnDefsChange={onColumnDefsChange}
                    onRemoveColumn={handleRemoveColumn}
                    onRestoreColumn={handleRestoreColumn}
                />
            )}
        </div>
    );
};

export default AgGridComponent;
