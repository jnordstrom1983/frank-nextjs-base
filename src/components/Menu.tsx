import { FrankContentItem, Franklanguage } from 'frank-react-sdk'

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
    return <div className='bg-[#f0f0f0] sticky left-0 right-0 top-0 mb-10 z-50'>
        <nav className='p-5 max-w-[1100px] m-auto flex'>
            <ul className='list-none m-0 p-0 flex gap-20'>
            {data.buttons.map(b=>{
                const data = b.data as ButtonDataFormat
                
                const url = data.page ? `${language ? `${language}/${data.page.slug}` : data.page.slug}` : data.url
                return <li key={b.contentId}><a href={url} className="text-[#4A7BA6] no-underline">{data.text}</a></li>

            })}
            </ul>
        </nav>
    </div>
}


