import React, { Component } from 'react'
import { Container, Row, Col, Image} from "react-bootstrap";
import { Result, SearchResults } from '../interfaces';
import "../components/Home.css"
import { FormControl } from 'react-bootstrap';

interface HomeState{
    results:  Result[]
    loading: boolean
    search:string
}



export default class Home extends Component <{}, HomeState> {

state={
    results: [] as Result[], 
    loading:true,
    search:"",
}

async componentDidMount() {
    const getAlbums = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=queen",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "1e45b6f96fmshc79e842018c9ea0p1288b9jsn2ba5d9842c9f",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );


const {data} = await getAlbums.json() as SearchResults 
this.setState({results:data, loading:false});

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
                 <Row>
                      <FormControl placeholder="Search" value={this.state.results} onChange={(e) => this.setState({search: e.currentTarget.value})}/>
                  </Row>
                  {this.state.results
                  .filter(result => result.title.indexOf(this.state.search) !== -1)
                  .map((result, key) => (
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
