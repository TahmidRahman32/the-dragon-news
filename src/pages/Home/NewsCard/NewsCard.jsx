import moment from "moment";
import React from "react";
import { Button, Card, Image } from "react-bootstrap";

import {  FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar,  } from "react-icons/fa";
import Rating from "react-rating";

import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
   const { _id, title, img, details, image_url, author, total_view, rating } = news;
   console.log()
   return (
      <Card className="mb-4">
         <Card.Header className="d-flex align-items-center">
            <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
            <div className="p-2 pb-0 fs-5 flex-grow-1">
               <p className="mb-0">{author?.name}</p>
               <small> {moment(author?.published_date).format("d, MM, D, YYYY,")}</small>
            </div>
            <div className="">
               <FaRegBookmark></FaRegBookmark>
               <FaShareAlt />
            </div>
         </Card.Header>
         <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text>
               {details?.length < 250 ? (
                  <>{details} </>
               ) : (
                  <>
                    
                     {details.slice(0, 250)}....
                     <Link className="text-decoration-none" to={`/news/:id${_id}`}>
                        Read more
                     </Link>
                  </>
               )}
            </Card.Text>

            <Button variant="primary">Go somewhere</Button>
         </Card.Body>
         <Card.Footer className="text-muted d-flex">
            <div className="flex-grow-1">
               <Rating placeholderRating={rating?.number} emptySymbol={<FaRegStar />} placeholderSymbol={<FaStar className="text-warning"></FaStar>} fullSymbol={<FaStar />}></Rating>
            </div>
            <div className="">
               <span>
                  <FaEye></FaEye>{" "}
               </span>
               <span className="ml-2">{total_view}</span>
            </div>
         </Card.Footer>
      </Card>
   );
};

export default NewsCard;
