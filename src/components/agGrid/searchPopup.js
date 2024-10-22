import React, { useState } from 'react';
import "./searchPopup.scss"
import { 
  Dialog, 
  DialogTitle, 
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

// 샘플 품번 데이터
const sampleProducts = [
  {
    품번: 'LKJ1WTOH002BR',
    품명: 'OVERSIZE HANDMADE COAT_BROWN',
    TAG가: '450000',
    색상: 'BROWN',
    사이즈: 'FREE'
  },
  {
    품번: 'LKJ1TCKS002DG',
    품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
    TAG가: '380000',
    색상: 'DARK GREY',
    사이즈: 'S,M,L'
  },
  // 더 많은 샘플 데이터를 추가할 수 있습니다
];

const ProductSearchPopup = ({ open, onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(sampleProducts);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    
    // 품번 또는 품명으로 검색
    const filtered = sampleProducts.filter(product => 
      product.품번.toLowerCase().includes(term.toLowerCase()) ||
      product.품명.toLowerCase().includes(term.toLowerCase())
    );
    
    setSearchResults(filtered);
  };

  const handleProductSelect = (product) => {
    onSelect({
      품번: product.품번,
      품명: product.품명,
      TAG가: product.TAG가,
      색상: product.색상,
      사이즈: product.사이즈
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>품번 검색</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="품번 또는 품명 검색"
          type="text"
          fullWidth
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          sx={{ mb: 2 }}
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>품번</TableCell>
                <TableCell>품명</TableCell>
                <TableCell>TAG가</TableCell>
                <TableCell>색상</TableCell>
                <TableCell>사이즈</TableCell>
                <TableCell>선택</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchResults.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>{product.품번}</TableCell>
                  <TableCell>{product.품명}</TableCell>
                  <TableCell>{product.TAG가}</TableCell>
                  <TableCell>{product.색상}</TableCell>
                  <TableCell>{product.사이즈}</TableCell>
                  <TableCell>
                    <Button 
                      variant="contained" 
                      size="small"
                      onClick={() => handleProductSelect(product)}
                    >
                      선택
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>닫기</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductSearchPopup;