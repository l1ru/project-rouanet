import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    position: relative;
    width: calc(55rem + 10%);
    height: 50%;
    background: #edebeb;
    border-radius: 1rem;

    display: flex;
    align-items: center;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const Projects = styled.div`
    margin: 0 auto;
    height: 90%;
    width: 90%;

    display: flex;
    justify-content: flex-start;

    position: relative;
    z-index: 1;
    &::-webkit-scrollbar {
        display: none;
    }
`
export const Icon = styled.i`
    position: absolute;
    font-size: 1.6rem;
    background-color: #f1f1f1;
    color: #cecece;
    padding: 0.5rem .9rem;
    border-radius: 50%;
    z-index: 2;

    box-shadow: 0px 0px 7px -1px rgb(0 0 0 / 44%);
    cursor: pointer;
    transition: 500ms;

    &.left {
        left: .5rem;
    }
    &:last-child {
        right: .5rem;
    }
    &:hover {
        color: var(--primary);
    }
`

export const BottomContent = styled.div`
    width: calc(55rem + 10%);
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;
`

export const ProjectsPages = styled.div`
    display: flex;
    div {
        background: red;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 1rem;
        margin: 0 .1rem;
        background-color: #c3c3c3;
        cursor: pointer;
        transition: 250ms;
        &:hover {
            background-color: var(--primary);
            transform: scale(1.2);
        }
        &.selected {
            background-color: var(--primary);
            cursor: default;
        }
    }
`



