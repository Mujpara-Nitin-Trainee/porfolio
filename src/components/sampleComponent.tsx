import axios from 'axios';
import { postAttributes } from '@/types/common';

async function getData() {
  const res = await axios('https://jsonplaceholder.typicode.com/posts');

  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  
  return res.data;

}

export default async function SampleComponent() {

  const data: postAttributes[] = await getData();

  return (
    <>
      {data.map((ele, index) => {
        return <div key={index} className='flex m-6 w-3/4'>
          <p>{ele.id}</p>
          <p className='mx-2'>{ele.title}</p>
        </div>
      })}
    </>
  )
}