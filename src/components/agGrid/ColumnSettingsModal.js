import React, { useEffect, useState } from 'react';
import { Settings2, X, Trash2, RotateCcw, XCircle } from 'lucide-react';
import './ColumnSettingsModal.scss';

const ColumnSettingsModal = ({
  columnDefs,
  deletedColumns,
  onClose,
  onRemoveColumn,
  onRestoreColumn
}) => {
  const [updatedColumnDefs, setUpdatedColumnDefs] = useState([...columnDefs]);
  const [activeTab, setActiveTab] = useState('current');
  const [isDragging, setIsDragging] = useState(false);
  const [modalPosition, setModalPosition] = useState(() => {
    // 모달의 예상 크기
    const modalWidth = 300;     // 예상 모달 너비
    const modalHeight = 400;    // 예상 모달 높이
    const padding = 20;         // 화면 가장자리와의 여백
    const bottomOffset = 30;   // 하단에서의 거리를 줄임
    
    return {
      // 오른쪽 하단 위치 계산
      top: window.innerHeight - modalHeight - bottomOffset,
      left: window.innerWidth - modalWidth - padding
    };
  });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // 창 크기가 변경될 때 모달 위치 조정
  useEffect(() => {
    const handleResize = () => {
      const modalWidth = 300;
      const modalHeight = 400;
      const padding = 20;
      const bottomOffset = 30;  // 하단에서의 거리를 줄임

      setModalPosition({
        top: window.innerHeight - modalHeight - bottomOffset,
        left: window.innerWidth - modalWidth - padding
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e) => {
    if (e.target.closest('.modal-header')) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - modalPosition.left,
        y: e.clientY - modalPosition.top
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const modalWidth = 300;
      const modalHeight = 400;
      const padding = 20;

      // 화면 경계를 벗어나지 않도록 제한
      const newLeft = Math.max(padding, Math.min(e.clientX - dragOffset.x, window.innerWidth - modalWidth - padding));
      const newTop = Math.max(padding, Math.min(e.clientY - dragOffset.y, window.innerHeight - modalHeight - padding));

      setModalPosition({
        top: newTop,
        left: newLeft
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

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
      <div className="modal-overlay" />
      <div
        className="column-settings-modal"
        style={{ top: modalPosition.top, left: modalPosition.left }}
        onMouseDown={handleMouseDown}
      >
        <div className="modal-header">
          <div className="header-title">
            <Settings2 size={20} />
            <h2>컬럼상자</h2>
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