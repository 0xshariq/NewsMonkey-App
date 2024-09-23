import React from "react";

function NewsItem(props){

    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="badge badge-pill badge-primary text-dark fs-1">
            {source}
          </span>
          <img src={imageUrl} className="card-img-top p-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unkown" : author} on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}
export default NewsItem;
