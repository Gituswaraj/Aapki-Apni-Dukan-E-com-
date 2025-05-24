import React,{useState} from 'react';
import '../selectDrop/select.css';
import  KeyboardArrowDownIcon  from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';


const Select =({data,placeholder,icon})=>{

  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setiselectedIndex] = useState(0);
  const [selectedItem, setelectedItem] = useState(placeholder);

const[listData, setListData]=useState(data);
const[listData2, setListData2] = useState(data);

      const openSelect=()=>{
        setisOpenSelect(!isOpenSelect);
      }
      const closeSelect=(index, name)=>{
        setiselectedIndex(index);
        setisOpenSelect(false);
        setelectedItem(name);
      }

     const filterList=(e)=>{
        const Keyword=e.target.value.toLowerCase();

        const list=listData2.filter((item)=>{
          return item.toLowerCase().includes(Keyword);
        })


        const list2= list.filter((item,index)=>list.indexOf(item)===index);
        
        setListData(list2)
     }

    return(
      <ClickAwayListener onClickAway={()=>setisOpenSelect(false)}>
        <div className='selectDropWrapper cursor position-relative'>
{icon}
       
       <span className='openSelect' onClick={openSelect}>{selectedItem.length>14? selectedItem.substr(0,14)+'...': selectedItem}  <KeyboardArrowDownIcon className='arrow'/> </span> 
        {
            isOpenSelect===true && 
            <div className='selectDrop'>
            <div className='searchField'>
                <input type='text' placeholder='Search here...' onChange={filterList}/>
                </div>
                <ul className='searchResults'>
                <li Key={0} onClick={()=>closeSelect(0,placeholder)} className={`${selectedIndex===0? 'active':''}`}>{placeholder} </li>

{
  listData.map((item,index)=>{
    return(
      <li Key={index+1} onClick={()=>closeSelect(index+1,item)} className={`${selectedIndex===index+1 ? 'active':''}`}>{item} </li>
    )
  })
}

               
                
                    
                </ul>
            </div>
        }
       
   </div>
   </ClickAwayListener>
    
    )


}
export default Select;