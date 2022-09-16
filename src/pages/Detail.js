import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import {db} from "../firebase"
import { collection, getDoc, getDocs } from "firebase/firestore"; 

const Detail = () => {
  const [content, setContent] = useState()

  const getDoc = async (colId, docId) => {
    try {
      const doc = await db.collection(colId).doc(docId).get()
      if(doc.exists) {
        console.log(doc.data());
      } 
      else {
        console.log('해당 document 없음!');
      }
      console.log('get : good!');


    } catch(e) {
      alert('get : err!');
    }
  }
  const addDoc = async (colId, data) => {
    try {
      await db.collection(colId).add(data);
      console.log('add : good!');
    } catch(e) {
      alert('add : err!');
    }
  }

  // const query = await getDocs(collection(db, 'bucket'));
  // console.log(query);
  // query.forEach((doc) => {
  //   console.log(doc.id, doc.data());
  // });
  useEffect(() => {
    getDoc('product', '상품4').then((data) => {
      setContent(data)
    })
    db.collection('product').doc('상품2').set({제목: '면', 가격: 1022, hello: 220} )

  }, []);

  return(

    <>
    <Header/>
    <Container>

      <button onClick={() => {console.log(content)}}>weeewe</button>
      <BoardContainer>
        <BoardContentContainer>
          <InfoContainer>
            <TitleContainer>markcoding-link-1.0.1 Setup.exe</TitleContainer>
            <EditContainer>4월 27일 정임도</EditContainer>
          </InfoContainer>
          <InfoContainer>
            <TitleContainer>markcoding-link-1.0.1 Setup.exe</TitleContainer>
            <EditContainer>4월 27일 정임도</EditContainer>
          </InfoContainer>
          <InfoContainer>
            <TitleContainer>markcoding-link-1.0.1 Setup.exe</TitleContainer>
            <EditContainer>4월 27일 정임도</EditContainer>
          </InfoContainer>
          <InfoContainer>
            <TitleContainer>markcoding-link-1.0.1 Setup.exe</TitleContainer>
            <EditContainer>4월 27일 정임도</EditContainer>
          </InfoContainer>
        </BoardContentContainer>
      </BoardContainer>
    </Container>
    </>

  );
};

export default Detail

const Container = styled.div`
  height: 80vh;
  width: 95vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`

const BoardContainer = styled.div`
  height: 60vh;
  width: 95vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid;
`

const BoardContentContainer = styled.div`
  height: 50vh;
  width: 90vw;
  display: flex;
  margin: auto;
  flex-direction: column;
`

const InfoContainer = styled.div`
  height: 10vh;
  width: 80vw;
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;
  margin: auto;
`

const TitleContainer = styled.div`
  height: 10vh;
  width: 30vw;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 2rem;
`

const EditContainer = styled.div`
  height: 10vh;
  width: 30vw;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 2rem;
`

