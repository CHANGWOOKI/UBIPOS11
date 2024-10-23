import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import {
  Building2,
  Truck,
  PackageCheck,
  FileText,
  TrendingUp,
  AlertCircle,
  Mail
} from 'lucide-react';
import "./style.scss";

const SalesStatusCard = ({ title, stats }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: '매출액',
            data: [1200, 1900, 3000, 5000, 2300, 3400, 4200],
            fill: false,
            borderColor: '#4de8c2',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [stats]);

  return (
    <div className="vet-dash__card vet-dash__card--wide">
      <div className="vet-dash__header">
        <span className="vet-dash__icon">
          <TrendingUp size={24} />
        </span>
        <h2>{title}</h2>
      </div>
      <div className="vet-dash__traction">
        <div className="vet-dash__stats-row">
          {stats.map((stat, index) => (
            <div key={index} className="vet-dash__stat-item">
              <span className="vet-dash__label">{stat.label}</span>
              <span className="vet-dash__value">{stat.value}</span>
            </div>
          ))}
        </div>
        <div className="vet-dash__graph">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

const renderTableCard = (card) => {

  const getIcon = (type) => {
    switch (type) {
      case 'headquarters':
        return <Building2 size={24} />;
      case 'outbound':
        return <Truck size={24} />;
      case 'inbound':
        return <PackageCheck size={24} />;
      case 'board':
        return <FileText size={24} />;
      case 'notice':
        return <AlertCircle size={24} />;
      case 'message':
        return <Mail size={24} />;
      default:
        return <FileText size={24} />;
    }
  };

  return (
    <div key={card.id} className="vet-dash__card">
      <div className="vet-dash__header">
        <span className="vet-dash__icon">
          {getIcon(card.iconType)}
        </span>
        <h2>{card.title}</h2>
        {card.hasAddButton && <button className="vet-dash__btn-add">+</button>}
      </div>
      <div className="vet-dash__table-container">
        <table className="vet-dash__table">
          <thead>
            <tr>
              {card.columns?.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {card.data.map((row, index) => (
              <tr key={index}>
                {card.columns?.map((column, colIndex) => (
                  <td key={colIndex}>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Main = () => {
  const firstRowCards = [
    {
      id: 1,
      iconType: 'headquarters',
      title: "본사지시RT내역",
      type: "profile",
      hasAddButton: true,
      columns: ["접수일자", "반출매장", "미처리"],
      data: [
        { 접수일자: "2024-01-01", 반출매장: "신촌점", 미처리: "3" },
        { 접수일자: "2024-01-02", 반출매장: "홍대점", 미처리: "5" },
        { 접수일자: "2024-01-03", 반출매장: "부산점", 미처리: "2" },
      ],
    },
    {
      id: 2,
      iconType: 'outbound',
      title: "반출RT내역",
      hasAddButton: true,
      type: "clinic",
      columns: ["접수일자", "반입매장", "미처리"],
      data: [
        { 접수일자: "2024-01-01", 반입매장: "강남점", 미처리: "1" },
        { 접수일자: "2024-01-02", 반입매장: "홍대점", 미처리: "2" },
        { 접수일자: "2024-01-03", 반입매장: "부산점", 미처리: "1" },
      ],
    },
    {
      id: 3,
      iconType: 'inbound',
      title: "반입RT내역",
      hasAddButton: true,
      columns: ["접수일자", "반입매장", "미처리"],
      data: [
        { 접수일자: "2024-01-01", 반입매장: "강남점", 미처리: "3" },
        { 접수일자: "2024-01-02", 반입매장: "홍대점", 미처리: "2" },
        { 접수일자: "2024-01-03", 반입매장: "부산점", 미처리: "3" },
      ],
    },
    {
      id: 4,
      iconType: 'board',
      title: "게시판",
      hasAddButton: true,
      columns: ["작성일자", "제목", "첨부"],
      data: [
        { 작성일자: "2024-01-01", 제목: "공지사항1", 첨부: "" },
        { 작성일자: "2024-01-02", 제목: "공지사항2", 첨부: "" },
        { 작성일자: "2024-01-03", 제목: "공지사항3", 첨부: "" },
      ],
    },
  ];

  const secondRowCards = [
    {
      id: 5,
      title: '매출현황',
      type: 'analytics',
      stats: [
        { label: '매출 순위', value: '3위' },
        { label: '오늘 매출', value: '2,399,000원' },
        { label: '전날 매출', value: '1,829,000원' },
      ],
    },
    {
      id: 6,
      iconType: 'notice',
      title: "공지사항",
      hasAddButton: true,
      columns: ["등록일", "제목", "확인"],
      data: [
        { 등록일: "2024-01-01", 제목: "매장 휴무", 확인: "미확인" },
        { 등록일: "2024-01-02", 제목: "실사 일자 안내", 확인: "미확인" },
        { 등록일: "2024-01-03", 제목: "휴무 안내", 확인: "확인" },
      ],
    },
    {
      id: 7,
      iconType: 'message',
      title: "쪽지",
      hasAddButton: true,
      columns: ["보낸일자", "제목", "첨부"],
      data: [
        { 보낸일자: "2024-01-01", 제목: "업무 협조 요청", 첨부: "" },
        { 보낸일자: "2024-01-02", 제목: "회의 일정 안내", 첨부: "" },
        { 보낸일자: "2024-01-03", 제목: "자료 요청", 첨부: "" },
      ],
    },
  ];

  return (
    <div className="vet-dash">
      <div className="vet-dash__container">
        <div className="vet-dash__row">
          {firstRowCards.map((card) => renderTableCard(card))}
        </div>
        <div className="vet-dash__row">
          {secondRowCards.map((card) =>
            card.type === 'analytics'
              ? <SalesStatusCard key={card.id} title={card.title} stats={card.stats} />
              : renderTableCard(card)
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;