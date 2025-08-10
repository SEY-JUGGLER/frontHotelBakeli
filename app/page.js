// app/page.jsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/login');
}


// export const StyledDiv = styled.h2`
//   background-color: #12013dff;
//   padding: 20px;
//   border-radius: 10px;
//   color: white;
//   text-align: center;
//   margin: 20px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   transition: transform 0.2s;`