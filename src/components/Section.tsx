"use client"
import styled from "styled-components"

interface SectionProps {
    marginBottom?: string
}

export const Section = styled.section<SectionProps>`
    margin-bottom: ${(props) => props.marginBottom ?? "50px"};
`
