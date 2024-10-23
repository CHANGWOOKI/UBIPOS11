import React, { useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import { Settings } from 'lucide-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ColumnSettingsModal from './ColumnSettingsModal';
import './AgGridComp.scss';

const PAGE_STORAGE_PREFIXES = {
  '/order/list': 'orderManagement_',
  '/order/registe': 'orderRegister_',
  '/sales': 'salesManagement_',
  '/inventory': 'inventoryManagement_',
};

const AgGridComponent = ({ rowData, columnDefs: initialColumnDefs }) => {
    const defaultColDef = useMemo(() => ({
        flex: 1,
        minWidth: 100,
        sortable: true,
        filter: false,
        resizable: true,
    }), []);

    

    const [showModal, setShowModal] = useState(false);
    const [gridApi, setGridApi] = useState(null);
    const [columnApi, setColumnApi] = useState(null);

    const location = useLocation();

    // 현재 경로에 맞는 세션 스토리지 키 생성
    const getSessionStorageKeys = () => {
        const path = location.pathname;
        return {
            COLUMN_DEFS: `${PAGE_STORAGE_PREFIXES[path] || ''}agGrid_columnDefs`,
            DELETED_COLUMNS: `${PAGE_STORAGE_PREFIXES[path] || ''}agGrid_deletedColumns`,
            COLUMN_ORDER: `${PAGE_STORAGE_PREFIXES[path] || ''}agGrid_columnOrder`,
        };
    };

    

    // 초기 상태 설정
    const getInitialColumnState = () => {
        const { COLUMN_DEFS, DELETED_COLUMNS, COLUMN_ORDER } = getSessionStorageKeys();

        try {
            const savedColumnDefs = sessionStorage.getItem(COLUMN_DEFS);
            const savedDeletedColumns = sessionStorage.getItem(DELETED_COLUMNS);
            const savedColumnOrder = sessionStorage.getItem(COLUMN_ORDER);
            
            if (savedColumnDefs && savedDeletedColumns && savedColumnOrder) {
                return {
                    currentColumnDefs: JSON.parse(savedColumnDefs),
                    deletedColumns: JSON.parse(savedDeletedColumns),
                    columnOrder: JSON.parse(savedColumnOrder)
                };
            }
        } catch (error) {
            console.error('Error parsing saved column state:', error);
        }
        
        return {
            currentColumnDefs: initialColumnDefs,
            deletedColumns: [],
            columnOrder: initialColumnDefs.map(col => col.field)
        };
    };

    const [state, setState] = useState(getInitialColumnState());
    const { currentColumnDefs, deletedColumns, columnOrder } = state;

    // 상태 변경 시 세션 스토리지 업데이트
    useEffect(() => {
        const { COLUMN_DEFS, DELETED_COLUMNS, COLUMN_ORDER } = getSessionStorageKeys();

        try {
            sessionStorage.setItem(COLUMN_DEFS, JSON.stringify(currentColumnDefs));
            sessionStorage.setItem(DELETED_COLUMNS, JSON.stringify(deletedColumns));
            sessionStorage.setItem(COLUMN_ORDER, JSON.stringify(columnOrder));
        } catch (error) {
            console.error('Error saving column state:', error);
        }
    }, [currentColumnDefs, deletedColumns, columnOrder, location.pathname]);

    const handleColumnSettings = () => setShowModal(true);

    const onColumnDefsChange = (newColumnDefs) => {
        setState(prev => ({
            ...prev,
            currentColumnDefs: newColumnDefs
        }));
    };

    

    const handleRemoveColumn = (column) => {
        setState(prev => ({
            deletedColumns: [...prev.deletedColumns, column],
            currentColumnDefs: prev.currentColumnDefs.filter(
                (col) => col.field !== column.field
            ),
            columnOrder: prev.columnOrder.filter(field => field !== column.field)
        }));
    };

    const handleRestoreColumn = (column) => {
        setState(prev => ({
            deletedColumns: prev.deletedColumns.filter(
                (col) => col.field !== column.field
            ),
            currentColumnDefs: [...prev.currentColumnDefs, column],
            columnOrder: [...prev.columnOrder, column.field]
        }));
    };

    const handleResetColumns = () => {
        const { COLUMN_DEFS, DELETED_COLUMNS, COLUMN_ORDER } = getSessionStorageKeys();

        setState({
            currentColumnDefs: initialColumnDefs,
            deletedColumns: [],
            columnOrder: initialColumnDefs.map(col => col.field)
        });
        sessionStorage.removeItem(COLUMN_DEFS);
        sessionStorage.removeItem(DELETED_COLUMNS);
        sessionStorage.removeItem(COLUMN_ORDER);
    };

    // AG Grid 이벤트 핸들러
    const onDragStopped = (event) => {
        if (!event.column) return;

        // 현재 표시된 컬럼들을 가져옴
        const displayedColumns = columnApi.getAllDisplayedColumns();
        const draggedColumn = event.column;
        
        // 드래그된 컬럼이 현재 표시된 컬럼 목록에 없다면 삭제된 것으로 간주
        if (!displayedColumns.find(col => col.colId === draggedColumn.colId)) {
            const columnState = columnApi.getColumn(draggedColumn.colId);
            if (columnState) {
                const deletedColumn = currentColumnDefs.find(col => col.field === draggedColumn.colId);
                if (deletedColumn) {
                    handleRemoveColumn(deletedColumn);
                }
            }
        }
    };

    const onColumnMoved = (event) => {
        if (columnApi) {
            const newColumnOrder = columnApi.getAllColumns().map(col => col.colId);
            setState(prev => ({
                ...prev,
                columnOrder: newColumnOrder
            }));
        }
    };

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
        domLayout: 'normal',
        onDragStopped: onDragStopped,
        onColumnMoved: onColumnMoved
    };

    const localeText = {
        loadingOoo: "로딩중..."
    };

    const onGridReady = (params) => {
        setGridApi(params.api);
        setColumnApi(params.columnApi);
        
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

    // 컬럼 상태 변경 감지
    const onColumnVisible = (event) => {
        if (event.visible === false && event.column) {
            const hiddenColumn = currentColumnDefs.find(col => col.field === event.column.colId);
            if (hiddenColumn) {
                handleRemoveColumn(hiddenColumn);
            }
        }
    };

    useEffect(() => {
        if (columnApi) {
            columnApi.setColumnOrder(columnOrder);
        }
    }, [columnApi, columnOrder]);

    return (
        <div className="ag-grid-container">
            <div 
                className="ag-theme-alpine" 
                style={{ height: 580, width: '100%' }}
            >
                <div className="grid-header-buttons">
                    <button className='column-settings-btn' onClick={handleColumnSettings}>
                        <Settings size={16} className="settings-icon" />
                    </button>
                    <button className='reset-columns-btn' onClick={handleResetColumns}>
                        컬럼 초기화
                    </button>
                </div>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={currentColumnDefs}
                    defaultColDef={defaultColDef}
                    animateRows={true}
                    gridOptions={gridOptions}
                    localeText={localeText}
                    onGridReady={onGridReady}
                    onColumnVisible={onColumnVisible}
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