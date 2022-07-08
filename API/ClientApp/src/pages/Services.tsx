import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import circuit from '../assets/images/circuit-board.svg';
import { CardService } from '../components/CardService';
import remote from '../assets/icons/services-remote-support.svg';
import onsite from '../assets/icons/services-onsite-support.svg';
import vendor from '../assets/icons/services-vendor-application-support.svg';
import monitoring from '../assets/icons/services-24-7-monitoring.svg';
import installation from '../assets/icons/services-server-monitoring.svg';
import hdd from '../assets/icons/services-hard-drive.svg';
import { Route, Switch } from 'react-router-dom';
import { RouteNotFound } from './PageNotFound';

const StyledSectionBanner = styled.section`
  padding: 2.5rem;
  background-image: url(${circuit}),
    linear-gradient(45deg, var(--dsmOrange), var(--dsmRed));
  color: white;
`;

const StyledSection = styled.section`
  h2 {
    margin-bottom: 2rem;
    font-weight: 700;
  }

  span {
    color: var(--bluePrimary);
  }
`;

const StyledServicesContainer = styled.div`
  padding-top: 3rem;
  margin-top: 3rem;
  border-top: 1px solid var(--mediumGray);

  h2 {
    text-align: center;
    margin-bottom: 4rem;
  }

  & svg {
    fill: var(--dsmBlue) !important;
  }
`;

export const Services = () => {
  return (
    <Switch>
      <Route exact path="/services" render={() => (
        <>
          <StyledSectionBanner>
            <Container>
              <h2>Services</h2>
            </Container>
          </StyledSectionBanner>
          <StyledSection>
            <Container>
              <Col className="m-auto" sm={12} md={7} lg={8}>
                <h1 className="display-3">
                  We provide <span>affordable</span> and <span>flexible</span> IT
                  solutions.
                </h1>
                <p className="w-100 m-auto">
                  Following a thorough analysis of your specific needs and goals for
                  the business, we can advise you about the various steps we can
                  implement to achieve them and improve your efficiency at a budget
                  that you can afford.
                </p>
                <p className="mt-4">
                  Below is a list of services that we can offer:
                </p>
                {/* The services container */}
                {/* IT Support */}
                <StyledServicesContainer>
                  <div className="d-flex flex-column">
                    <h2 id="it-support">Managed IT Support</h2>
                    <Row className="d-flex justify-content-between">
                      <Col sm={12}>
                        <p>
                          We utilise a wide range of cutting edge tools to enable us
                          to support your business whilst causing little or no
                          impact on your daily operations and end users.
                        </p>
                        <p className="mb-5">
                          Whether you require user, vendor, or server support, we
                          will be ready to help. We can achieve all of this
                          remotely, but for those occasions when it is required, our
                          team can be deployed on-site.
                        </p>
                      </Col>

                      <Col sm={12} md={4}>
                        <CardService title="Remote Support" icon={remote} />
                      </Col>
                      <Col sm={12} md={4}>
                        <CardService title="On-site Support" icon={onsite} />
                      </Col>
                      <Col sm={12} md={4}>
                        <CardService
                          title="Vendor Application Support"
                          icon={vendor}
                        />
                      </Col>
                      <Col sm={12} md={4}>
                        <CardService
                          title="24/7 Infrastructure Monitoring"
                          icon={monitoring}
                        />
                      </Col>
                      <Col sm={12} md={4}>
                        <CardService
                          title="Server Installations and Configurations"
                          icon={installation}
                        />
                      </Col>
                      <Col sm={12} md={4}>
                        <CardService
                          title="On-site and Remote Backups"
                          icon={hdd}
                        />
                      </Col>
                    </Row>
                  </div>
                </StyledServicesContainer>
                {/* Network Infrastructure */}
                <StyledServicesContainer>
                  <div className="d-flex flex-column">
                    <h2 id="network-infrastructure">Network Infrastructure</h2>
                    <Row>
                      <Col sm={12}>
                        <p>
                          Networks are key to an organisation’s success, delivering
                          onsite or remote access to the organisation's data in a
                          secure and reliable manner.
                        </p>
                        <p>
                          Ensuring you have a high capacity, reliable, scalable, and
                          secure network infrastructure is becoming increasingly
                          important as we move towards cloud and hybrid services.
                          DSM provides and manages a wide range of networking
                          solutions using trusted vendors. We use in-house
                          monitoring tools to ensure the infrastructure is available
                          and take speedy action to address any issues identified.
                        </p>
                        <p>
                          We have been involved in consulting and building networks
                          for customers for the last 20 years. Over that time we
                          have delivered all sorts of infrastructure for our
                          customers. Projects have ranged from extending network
                          connection to remote locations, high-performance backbone
                          networks, managed Wi-Fi infrastructures and everything
                          else in between.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </StyledServicesContainer>
                {/* Cloud */}
                <StyledServicesContainer>
                  <div className="d-flex flex-column">
                    <h2 id="cloud">Cloud</h2>
                    <Row className="d-flex justify-content-around">
                      <Col sm={12}>
                        <p>
                          Cloud-based solutions can provide a host of benefits
                          compared to the traditional model of on-site systems and
                          hardware. From cost, flexibility, performance, or security
                          to name a few, the advantages are numerous.
                        </p>
                        <p>
                          The key challenge is to understand the balance between
                          what is kept on-premises and what is more effectively
                          supported in the cloud. We work with our customers to
                          provide the sensible balance for them and to develop and
                          implement plans to migrate services to the cloud, where
                          beneficial. This may be the wholesale moving of
                          infrastructure off-premises or the moving of services to a
                          Software as a Service (SaaS) model.
                        </p>
                        <p>
                          We are finding that most of our customers are using a
                          hybrid model - a combination of on-premises and
                          cloud-based services.
                        </p>
                        <p>
                          Our cloud offerings can cover disaster recovery,
                          communication, and cybersecurity.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </StyledServicesContainer>
                {/* Telephony */}
                <StyledServicesContainer>
                  <div className="d-flex flex-column">
                    <h2 id="telephony">Telephony</h2>
                    <Row className="d-flex justify-content-around">
                      <Col sm={12}>
                        <p>
                          To ensure your business stays connected at all times, we
                          can supply a couple of cost-effective, cloud-based voice
                          services: <strong>3CX</strong> and{' '}
                          <strong>Microsoft Teams</strong>.
                        </p>
                        <p>
                          3CX is a tried and tested voice system that allows your
                          business to communicate via the public switched telephone
                          network (PSTN) or via Voice over Internet Protocol (VoIP).
                        </p>
                        <p>
                          As part of the Microsoft 365 Business licensing plan,
                          Microsoft Teams can now expand on its video calling
                          features to provide a cloud-based phone system for small
                          and medium sized businesses. It enables users to make,
                          receive, and transfer calls to and from landlines and
                          mobile phones on the public switched telephone network
                          (PSTN) from within the application.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </StyledServicesContainer>
                {/* IT Consultancy */}
                <StyledServicesContainer>
                  <div className="d-flex flex-column">
                    <h2 id="it-consultancy">IT Consultancy</h2>
                    <Row>
                      <Col sm={12}>
                        <p>
                          Consulting clients is at the core of all our services. We
                          will work closely with you to understand your business
                          goals and the most effective way of achieving them.
                        </p>
                        <p>
                          Here at DSM, we will take the guesswork out of your IT
                          strategy and devise tailored solutions using only current
                          best practices.
                        </p>
                        <p>
                          In our experience, this is the approach that benefits
                          businesses of all sizes. Whether you are well established
                          and looking to better your IT infrastructure, or just
                          starting out, having a conversation with us over potential
                          solutions can have a positive long-term impact.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </StyledServicesContainer>
                {/* Cybersecurity */}
                <StyledServicesContainer>
                  <div className="d-flex flex-column">
                    <h2 id="communications">Cybersecurity</h2>
                    <Row className="d-flex justify-content-around">
                      <Col sm={12}>
                        <p>
                          We offer an extensive cybersecurity package, ensuring your
                          organisation avoids any vulnerabilities and threats.
                        </p>
                        <p>
                          This includes: email security, network firewalls, web
                          filtering, secure remote access, user account protection.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </StyledServicesContainer>
              </Col>
            </Container>
          </StyledSection>
        </>
      )} />
      <RouteNotFound />
    </Switch>
  );
};
