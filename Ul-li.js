import React, {useState} from "react"

function UlLi  () {
    const [info, SetInfo] = useState('');
    const [infos, SetInfos] = useState([])

    // Thêm thẻ <li> nội dung trong ô input
    const add = () => {
        SetInfos(a => [...a, info])
        SetInfo('')
    }

    // Thêm nút remove
    const remove = () => {
        const list = document.getElementById('list');
        let c = list.lastElementChild;
        if(c){
            list.removeChild(c)
        }
        return;
    }


    // Thêm nủt "Hide"
    const hide = () => {
        const b = document.getElementById('hide');
        const list = document.getElementById('list');
        if(b.innerText == 'Hide'){
            b.innerText = 'Show';

        }else{
            b.innerText="Hide";

        }
        list.classList.toggle('hide');
    
    }

    return (
        <div class="main-container">
            <button id = "button" onClick={add}>Add</button>
            <button id = "remove" onClick={remove}>Remove</button>
            <button id = "hide" onClick={hide}>Hide</button>
            <input 
                value={info} 
                onChange={e => SetInfo(e.target.value)} type="text"  placeholder=" Nhập nội dung"></input>
            <ul id="list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            {infos.map((info) => (
            <li>{info}</li>))}
        </ul>
        </div>
    );
}

export default UlLi;

