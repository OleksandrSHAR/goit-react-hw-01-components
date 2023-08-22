import styled from 'styled-components';

export const ProfileStyle = styled.div`
 display: flex;
 flex-direction: column;
  align-items: center;
  justify-content: center;
 margin-left:auto;
 margin-right:auto;
 width:360px;
 gap:20px;
 background-color:${props=>props.theme.colors.orange}   ;
 border-radius:10px;
 padding:30px;
 box-shadow: 2px  2px 2px 1px ${props => props.theme.colors.blue}; 
 margin-top:20px;
`

export const Description = styled.div`
display: flex;
flex-direction: column;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
gap: 10px;
width:100%;`
 
export const AvatarStyle = styled.img`
display:block;
width:150px;
height:150px;
border-radius: 100%;
margin-left:auto;
margin-right:auto;
  `

export const Name = styled.p`
font-family: 'DM Sans';
font-weight: 700;
font-size: 30px;
color: ${props=>props.theme.colors.blue};
 
`
export const Tag = styled.p`
display:block;
 font-family: 'DM Sans';
 font-weight: 200;
color: ${props=>props.theme.colors.blue};
`
export const Location = styled.p`
display:block;
font-family: 'DM Sans';
 font-weight: 200;
color: ${props=>props.theme.colors.blue};
`

export const Stats = styled.ul` 
display:flex;
 gap:10px;
font-family: 'DM Sans';
 font-weight:400;
 
color: ${props=>props.theme.colors.blue};
 :hover{
    background-color: ${props=>props.theme.colors.greu};
 }`
export const Item = styled.li`
display: flex;
flex-direction: column;
gap:10px;
width:100px;
 text-align:center;
  
`
