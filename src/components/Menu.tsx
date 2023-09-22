"use client"

import { FrankContentItem, Franklanguage } from 'frank-react-sdk'
import styled from 'styled-components'

interface MenuDataFormat{
    name : string,
    logo? : { assetId : string, url : string}
    buttons : FrankContentItem[]
}

interface ButtonDataFormat{
    
    text : string,
    url? : string,
    page? : FrankContentItem
}

export function Menu({item, language} : { item : FrankContentItem, language? : Franklanguage}){
    const data = item.data as MenuDataFormat;
    return <Menubar>
        <nav>
            <ul>
            {data.buttons.map(b=>{
                const data = b.data as ButtonDataFormat
                
                const url = data.page ? `${language ? `${language}/${data.page.slug}` : data.page.slug}` : data.url
                return <li key={b.contentId}><a href={url}>{data.text}</a></li>

            })}
            </ul>
        </nav>
    </Menubar>
}


const Menubar = styled.div`
    background-color:#F0F0F0;
    position: sticky;
    left:0px;
    right:0px;
    top:0px;
    margin-bottom:30px;
    z-index:100;

    nav{
        padding:20px;
        max-width : 1100px;
        margin: auto;
        display:flex;
        
        ul{
            list-style-type: none;
            margin: 0;
            padding: 0;
            display:flex;
            gap : 50px;
        }
        a{
            color: #4A7BA6;
            text-decoration:none;
        }    
    }
`


