import React, { Component } from 'react'
import { Container, Row, Col, Image} from "react-bootstrap";
import { Result, SearchResults } from '../interfaces';
import "../components/Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchB from "../components/SearchB";

interface HomeState{
    results:  Result[]
    loading: boolean
    search:string
}



export default class Home extends Component <{}, HomeState> {

state={
    results: [] as Result[], 
    loading:true,
    search:""
}

getInput = (search: string) => {
    this.setState({ search: search });
    this.fetchAlbums(search);
  };

fetchAlbums = async(search: string) => {
    try {
        let response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "1e45b6f96fmshc79e842018c9ea0p1288b9jsn2ba5d9842c9f",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        })

const {data} = await response.json() as SearchResults 
this.setState({results:data, loading:false});
        
    } catch (error) {
        console.log(error);
        // next(error);
    }

    
}



    render() {
        const {loading} = this.state
        return (
            <div className="HomePage">
            <div className="main-page row mt-5">
              {loading ? (
                <h4>{loading}</h4>
              ) : (
                 
                <>
               
          <Col className="d-flex justify-content-center" xs={12}>
            <SearchB search={this.getInput} />
          </Col>
               

                  {this.state.results.map((result, key) => (
                    <Container className="container-wrapper col-sm-1 ">
                      <Row className="albums-wrapper my-3 " key={key}>
                        <Col className="singleAlbum ">
                        
                            <Image
                              className="album-cover"
                              src={result.album.cover}
                            />
                            <h4 className="d-flex justify-content-center mt-2 album-title">
                              {result.album.title}{" "}
                            </h4>
                         
                        </Col>
                      </Row>
                      
                    </Container>
                     
                  ))}
                </>
              )}
            </div>
          </div>
        )
    }
}
