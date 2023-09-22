"use client"
import styled from "styled-components";


interface GridProps{
    gridColumnTemplates? : string
    gap : string,
    alignItem? : "center" | "flex-start"
}

export const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: ${props => props.gridColumnTemplates ?? "1fr 1fr"};
    align-items: ${props => props.alignItem ?? "center" };
    gap : ${props => props.gap};
    margin: auto;
    width : 100%;


    @media only screen and (max-width: 1100px) {
        grid-template-columns: ${props => "1fr"};
        max-width: 100%;
        gap : 20px;
    }

`


export const GridColumn = styled.div<{}>`
    p {
        margin-bottom:30px;
    }
    p:last-child {
        margin-bottom:0px;
    }

    @media only screen and (max-width: 1100px) {
        img{
            width:100%
        }
    }

`