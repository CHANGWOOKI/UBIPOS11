import React from 'react';
import { DataGrid, Column, FilterRow, Pager, Paging } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
import "./gridComponent.scss"

const GridComponent = ({ dataSource, columns }) => {
    return (
        <div className="grid-container"> {/* 컨테이너 추가 */}
            <DataGrid
                dataSource={dataSource}
                showBorders={true}
                columnAutoWidth={true}
                rowAlternationEnabled={true}
            >
                <FilterRow visible={true} />
                <Paging defaultPageSize={10} />
                <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 20]} showInfo={true} />
                {columns.map((col, index) => (
                    <Column key={index} {...col} />
                ))}
            </DataGrid>
        </div>
    );
};

export default GridComponent;