import React, { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Settings } from 'lucide-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ColumnSettingsModal from './ColumnSettingsModal';
import './AgGridComp.scss';

const AgGridComponent = ({ rowData, columnDefs }) => {
    const defaultColDef = useMemo(() => ({
        flex: 1,
        minWidth: 100,
        sortable: true,
        filter: false,
        resizable: true,
    }), []);

    const [showModal, setShowModal] = useState(false);
    const [currentColumnDefs, setCurrentColumnDefs] = useState(columnDefs);
    const [deletedColumns, setDeletedColumns] = useState([]);
    const [gridApi, setGridApi] = useState(null);

    const handleColumnSettings = () => setShowModal(true);

    const onColumnDefsChange = (newColumnDefs) => {
        setCurrentColumnDefs(newColumnDefs);
    };

    const handleRemoveColumn = (column) => {
        setDeletedColumns((prev) => [...prev, column]);
        setCurrentColumnDefs((prev) => prev.filter((col) => col.field !== column.field));
    };

    const handleRestoreColumn = (column) => {
        setDeletedColumns((prev) => prev.filter((col) => col.field !== column.field));
        setCurrentColumnDefs((prev) => [...prev, column]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const column = JSON.parse(e.dataTransfer.getData('text/plain'));
        setCurrentColumnDefs((prev) => [...prev, column]);
    };

    const handleDragOver = (e) => e.preventDefault();

    const gridOptions = {
        suppressMovableColumns: false,
        suppressColumnVirtualisation: true,
        suppressRowVirtualisation: false,
        rowBuffer: 10,
        rowModelType: 'clientSide',
        enableCellTextSelection: true,
        suppressCellSelection: false,
        suppressRowClickSelection: true,
        suppressLoadingOverlay: true,
        suppressNoRowsOverlay: true,
        domLayout: 'normal'
    };

    const localeText = {
        loadingOoo: "로딩중..."
    };

    const onGridReady = (params) => {
        setGridApi(params.api);
        if (params.api) {
            params.api.sizeColumnsToFit();

            const resizeObserver = new ResizeObserver(() => {
                setTimeout(() => {
                    params.api.sizeColumnsToFit();
                }, 100);
            });

            const gridElement = document.querySelector('.ag-theme-alpine');
            if (gridElement) {
                resizeObserver.observe(gridElement);
            }
        }
    };

    return (
        <div className="ag-grid-container">
            <div 
                className="ag-theme-alpine" 
                style={{ height: 580, width: '100%' }}
                onDrop={handleDrop} 
                onDragOver={handleDragOver}
            >
                <button className='column-settings-btn' onClick={handleColumnSettings}>
                    <Settings size={16} className="settings-icon" />
                </button>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={currentColumnDefs}
                    defaultColDef={defaultColDef}
                    animateRows={true}
                    gridOptions={gridOptions}
                    localeText={localeText}
                    onGridReady={onGridReady}
                    onFirstDataRendered={(params) => {
                        params.api.sizeColumnsToFit();
                    }}
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