// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    indexNo: 0,
  }

  onLeftReview = () => {
    const {indexNo} = this.state

    if (indexNo > 0) {
      this.setState(prevState => ({indexNo: prevState.indexNo - 1}))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="details-container">
        <img src={imgUrl} alt={username} className="profile" />
        <p className="name">{username}</p>
        <p className="company">{companyName}</p>
        <p className="company-description">{description}</p>
      </div>
    )
  }

  onRightReview = () => {
    const {reviewsList} = this.props
    const {indexNo} = this.state

    if (indexNo < reviewsList.length - 1) {
      this.setState(prevState => ({indexNo: prevState.indexNo + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {indexNo} = this.state
    const currentReviewDetails = reviewsList[indexNo]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="card">
          <button
            className="button"
            type="button"
            data-testid="leftArrow"
            onClick={this.onLeftReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            className="button"
            type="button"
            data-testid="rightArrow"
            onClick={this.onRightReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
