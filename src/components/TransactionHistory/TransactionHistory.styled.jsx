import styled from 'styled-components';

export const TransactionHistoryStyle=styled.table`
    width: 600px;
    font-family: 'DM Sans';
 font-weight: 200;
 color:${props=>props.theme.colors.blue};
    margin-left: auto;
    margin-right: auto;
     border: 2px solid ${props=>props.theme.colors.blue};
     border-radius:10px;
     background-color:${props=>props.theme.colors.orange};
     margin-top:20px;
     margin-bottom:20px;
     box-shadow: 2px  2px 2px 1px ${props => props.theme.colors.blue}; 
`
export const Tr = styled.tr`
    text-align: center;
`
export const Tbody = styled.tbody`
  :hover{
        background-color: ${props=>props.theme.colors.greu};
    }
    :first-child {
    border-bottom-left-radius: 10px;
     
  }
  :last-child {
    border-bottom-right-radius: 10px;}
    
`
export const Td =styled.td`
    border: 1px solid ${props=>props.theme.colors.blue};
   
` 