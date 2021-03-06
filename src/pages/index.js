import { graphql } from 'gatsby';
import React from 'react';
import Global from '../components/Global';
import Layout from '../components/layout';
import Images from '../components/Images';
import Videos from '../components/Videos';
import Intro from '../components/Intro';
import styled from '@emotion/styled';
import StackableImageAndTextDuo from '../components/generic-reusable-components/stackable-image-and-text-duo';
import ChangeGearsBlock from '../components/generic-reusable-components/change-gears-block';
import JoinOurTeamCornerBtn from './../components/generic-reusable-components/join-our-team-corner-btn';
import 'semantic-ui-css/semantic.min.css';
import StaffAugmentationImage from '../components/img-components/staff-augmentation.img';

const StyledIndex = styled.div`
  background-color: #000032;
`;

export default function IndexPage({ data }) {
  return (
    <Global pageTitle={''} path={'/'} description={''}>
      <StyledIndex>
        <Layout>
          <Images />
          <Intro />
          <div id="engineering">
            <StackableImageAndTextDuo
              images={[
                { img: 'staff', name: 'Staff Augmentation' },
                { img: 'top', name: 'Top Engineering Talent' },
                { img: 'technical', name: 'Technical Audits' },
              ]}
              title="Engineering"
              header1="Excellence in Code"
              paragraph1=""
              header2=""
              paragraph2=""
              imgName="HOME_ENG"
              imgOnLeft={true}
              buttonText="Discover More"
              buttonLinkTo="/engineering"
            >
              <p>
                At Evaluates2, we focus on excellence in code. As such we focus
                on the following values on all projects we work on.
                <br />
                - Test Driven Development
                <br />
                - Continuous Integration
                <br />
                - Staging and Production Environments
                <br />- Dependency Management and Clean Code
              </p>
            </StackableImageAndTextDuo>
          </div>
          <div id="product">
            <StackableImageAndTextDuo
              images={[
                { img: 'resource', name: 'Resource Efficiency' },
                { img: 'process', name: 'Process Improvements' },
                { img: 'project', name: 'Project Management' },
              ]}
              title="Product Management"
              header1="Workflows & Story Prioritization"
              paragraph1=""
              header2=""
              paragraph2=""
              imgName="HOME_PRODUCT"
              imgOnLeft={false}
              buttonText="Read More"
              buttonLinkTo="/product-management"
            >
              <p>
                Successful development starts with effective product management.
                Align your team and get successful project results with Def
                Method Product Management. Our PMs will work with your team to
                find the process that works best for you. They will manage
                communication and make sure the team stays focused on delivering
                your goals.
              </p>
            </StackableImageAndTextDuo>
          </div>
          <div id="discovery">
            <StackableImageAndTextDuo
              images={[
                { img: 'design', name: 'Design Sprint' },
                { img: 'mvp', name: 'MVP Build' },
                { img: 'maintenance', name: 'Maintenance Mode' },
              ]}
              title="Startup MVP Development"
              header1="Building The First Iteration of Your Product"
              paragraph1=""
              header2=""
              paragraph2=""
              imgName="HOME_DISCOVERY"
              imgOnLeft={true}
              buttonText="Learn More"
              buttonLinkTo="/startup"
            >
              <p>
                Are you on the first stage of your project and are looking for a
                technical team to help bring your vision to life? Well, then,
                you've come to the right place! At Evaluates2 we have a process
                in place that makes building an MVP seamless, tested, and
                scalable. As founders, we know what it's like building a company
                and look forward to partnering with you to build yours!
              </p>
            </StackableImageAndTextDuo>
          </div>
          <div id="data">
            <StackableImageAndTextDuo
              images={[
                { img: 'process', name: 'Smart Data Storage' },
                { img: 'pie-chart-stats', name: 'Visualizations' },
                { img: 'staff', name: 'Informed Decisions' },
              ]}
              title="Data & Analytics"
              header1="Learn More About Your Business & Users"
              paragraph1=""
              header2=""
              paragraph2=""
              imgName="HOME_ANALYTICS"
              imgOnLeft={false}
              buttonText="See More"
              buttonLinkTo="/data-and-analytics"
            >
              <p>
                Deploying a new project for the first time is an exciting event, and it's especially exciting for data scientists because having real users means we'll be collecting real data! Building and deploying software without keeping tabs on the data is like shooting a rocket into out space and then just turning off the transmission feeds between it and ground control! Evaluates2 data engineers can help establish practices for funneling data to different places for different purposes, develop and determine the most useful visualizations for a given data set, and help management make informed decisions based on statisical evidence rather than biases and gut feelings.
              </p>
            </StackableImageAndTextDuo>
          </div>
          <ChangeGearsBlock
            headerText="See how we think"
            linkText="View our resources"
            linkTo="/engineering"
          ></ChangeGearsBlock>
          <Videos />
          <JoinOurTeamCornerBtn />
        </Layout>
      </StyledIndex>
    </Global>
  );
}
