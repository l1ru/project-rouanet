import styled from "styled-components";

export const Container = styled.div`
    width: 21rem;
    height: 100%;
    background-color: #f1f1f1;
    border-radius: 1rem;
    border: 4px solid #f1f1f1;

    box-shadow: 0px 0px 7px -1px rgba(0, 0, 0, 0.44);

    display: grid;
    place-items: center;

    margin-left: 1rem;
    &:first-child {
        margin-left: 0;
    }
`;

export const Content = styled.div`
    width: 90%;
    height: 90%;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
`;

export const ProjectCategory = styled.div`
    color: #ee9b00;
    background-color: #f8edeb;

    font-weight: 500;
    font-size: 1rem;
    width: fit-content;

    padding: 0.2rem 0.4rem;
    border-radius: .3rem;
`
export const ProjectName = styled.div`
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: .4rem;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

`
export const ProjectLocation = styled.div`
    color: #a8a7a7;
    font-weight: 300;
    font-size: 1rem;
    margin: .4rem 0;
`
export const ProjectDescription = styled.p`
    display: -webkit-box;
    font-weight: 400;
    margin-bottom: 1rem;
    color: #a8a7a7;

    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;

    font-size: 1.1rem;
`

export const ProjectValues = styled.div`
    margin-bottom: 1rem;
    div {
        display: flex;
        p {
            font-weight: 500;
            width: 5rem;
        }
        span {
            font-weight: 600;
        }
    }
`
export const PorjectActions = styled.div`
    display: flex;
    button {
        color: #cecece;
        border: 1px solid #00000010;
        padding: .7rem 5rem;
        border-radius: .2rem;
        font-weight: 600;

        cursor: pointer;
        transition: 500ms;
        &:hover {
            background-color: #f8edeb;
            color: #ee9b00;
        }
    }
    i {
       font-weight :400;
       font-size: 1.4rem;
       padding: .7rem 1rem;
       color: #a83232;

       cursor: pointer;
       &.actived {
           font-weight: 600;
       }
    }
`
