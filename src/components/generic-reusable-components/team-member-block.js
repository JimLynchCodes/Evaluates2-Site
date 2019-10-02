import React from 'react';
// import Global from "../components/Global"
// import Layout from '../components/layout';
import styled from '@emotion/styled';
// import JoinOurTeamCornerBtn from './../components/generic-reusable-components/join-our-team-corner-btn';
import PersonImage from './../img-components/person-img.img';
import Link from 'gatsby-link';


const PersonColorContainer = styled.div`
  background-color: #0040ff;
  border-radius: 8px;
`;

const StyledPersonImage = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
    color: #0033cc;
  
  .gatsby-image-wrapper {
    background-color: #000032;
    max-height: 200px;
    border-radius: 8px;

    :hover {
      top: -8px;
      left: -8px;
      position: absolute;
    }
  }

  h2 {
    font-size: 17px;
    margin: 6px auto 6px 5px;
    font-family: 'e2-Raleway-Semi-Bold';
    line-height: 17px;

:hover {
  color: #678cff;
}
  }

  p {
    font-size: 15px;
    margin: 2px auto 2px 5px;
    font-family: 'e2-Raleway';
    line-height: 15px;

:hover {
  color: #678cff;
}
  }

  .bg-div {
    /* position: absolute; */
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: teal;
  }
`

const TeamMemberBlock = ({ name, linkTo, role }) => {
    return (
        <Link to="team/joe-leo">
            <StyledPersonImage>
              <PersonColorContainer>
                <PersonImage name="Joe Leo" role="CEO, Cofounder"></PersonImage>
              </PersonColorContainer>
            <h2>
                {name}
            </h2>
            <p>
                {role}
            </p>
            <div className="bg-div">

            </div>
            </StyledPersonImage>
        </Link>
    )
}

export default TeamMemberBlock;