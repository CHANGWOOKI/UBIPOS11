import React from 'react';
import { Settings2, X, Trash2, RotateCcw, XCircle } from 'lucide-react';
import './ColumnSettingsModal.scss';

const ColumnSettingsModal = ({ 
  columnDefs, 
  deletedColumns, 
  onClose, 
  onColumnDefsChange, 
  onRemoveColumn, 
  onRestoreColumn 
}) => {
  const [updatedColumnDefs, setUpdatedColumnDefs] = React.useState([...columnDefs]);
  const [activeTab, setActiveTab] = React.useState('current');

  const handleRemoveColumn = (index) => {
    const removedColumn = updatedColumnDefs[index];
    setUpdatedColumnDefs(updatedColumnDefs.filter((_, i) => i !== index));
    onRemoveColumn(removedColumn);
  };

  const handleRestoreColumn = (column) => {
    setUpdatedColumnDefs((prev) => [...prev, column]);
    onRestoreColumn(column);
  };

  const TabButton = ({ value, label, icon: Icon }) => (
    <button
      className={`tab-button ${activeTab === value ? 'active' : ''}`}
      onClick={() => setActiveTab(value)}
    >
      <Icon size={16} />
      <span>{label}</span>
    </button>
  );

  const ColumnList = ({ columns, onAction, actionIcon: ActionIcon, actionText }) => (
    <div className="column-list">
      {columns.length === 0 ? (
        <div className="empty-state">
          {activeTab === 'current' ? '표시할 열이 없습니다.' : '삭제된 열이 없습니다.'}
        </div>
      ) : (
        columns.map((col, index) => (
          <div key={index} className="column-item">
            <span className="column-name">
              {col.headerName}
              <span className="column-field">({col.field})</span>
            </span>
            <button
              className={`action-button ${actionText === '복구' ? 'restore' : 'remove'}`}
              onClick={() => onAction(index)}
              title={actionText}
            >
              <ActionIcon size={16} />
              <span>{actionText}</span>
            </button>
          </div>
        ))
      )}
    </div>
  );

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="column-settings-modal">
        <div className="modal-header">
          <div className="header-title">
            <Settings2 size={20} />
            <h2>열 설정</h2>
          </div>
          <button className="close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="tabs">
          <TabButton 
            value="current" 
            label="현재 열" 
            icon={Settings2}
          />
          <TabButton 
            value="deleted" 
            label="삭제된 열" 
            icon={XCircle}
          />
        </div>

        <div className="modal-content">
          <div className="tab-content">
            {activeTab === 'current' && (
              <ColumnList
                columns={updatedColumnDefs}
                onAction={handleRemoveColumn}
                actionIcon={Trash2}
                actionText="삭제"
              />
            )}
            {activeTab === 'deleted' && (
              <ColumnList
                columns={deletedColumns}
                onAction={(index) => handleRestoreColumn(deletedColumns[index])}
                actionIcon={RotateCcw}
                actionText="복구"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ColumnSettingsModal;