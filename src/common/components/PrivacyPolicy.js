import { Box, Text, Anchor } from "grommet";
import HeadingContainer from "./HeadingContainer";
import Footer from "../../components/footer/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Box
        height="auto"
        width="xlarge"
        pad="medium"
        margin={{ horizontal: "auto" }}
        background="#F8F9FA"
      >
        <Box border={{ side: "bottom", size: "xsmall" }} pad="xsmall">
          <Text size="medium" weight="600">
            Updated June 30, 2021
          </Text>
        </Box>
        <HeadingContainer heading="Privacy Policy for Pinpointstay">
          <Text>
            At Pinpointstay, accessible from pinpointstay.com, one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by Pinpointstay and how we use it. If you have additional
            questions or require more information about our Privacy Policy, do
            not hesitate to contact us. This Privacy Policy applies only to our
            online activities and is valid for visitors to our website with
            regards to the information that they shared and/or collect in
            Pinpointstay.
          </Text>
        </HeadingContainer>
        <HeadingContainer heading="Consent">
          <Text>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </Text>
        </HeadingContainer>
        <HeadingContainer heading="Information we collect">
          <Text>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information. If you
            contact us directly, we may receive additional information about you
            such as your name, email address, phone number, the contents of the
            message and/or attachments you may send us, and any other
            information you may choose to provide. When you register for an
            Account, we may ask for your contact information, including items
            such as name, company name, address, email address, and telephone
            number.
          </Text>
        </HeadingContainer>
        <HeadingContainer heading="How we use your information">
          <Text>
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </Text>
        </HeadingContainer>
        <HeadingContainer heading="Log Files">
          <Text>
            Pinpointstay follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </Text>
        </HeadingContainer>
        <HeadingContainer heading="Cookies and Web Beacons">
          <Text>
            Like any other website, Pinpointstay uses 'cookies'. These cookies
            are used to store information including visitors' preferences, and
            the pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information. For more general information on cookies, please read
            <Anchor
              href="https://www.privacypolicyonline.com/what-are-cookies/"
              label='"What Are Cookies"'
              margin={{ horizontal: "xsmall" }}
            />
            .
          </Text>
        </HeadingContainer>
        <HeadingContainer heading="Google DoubleClick DART Cookie">
          <Text>
            Google is one of a third-party vendor on our site. It also uses
            cookies, known as DART cookies, to serve ads to our site visitors
            based upon their visit to www.website.com and other sites on the
            internet. However, visitors may choose to decline the use of DART
            cookies by visiting the Google ad and content network Privacy Policy
            at the following URL-{" "}
            <Anchor
              href="https://policies.google.com/technologies/ads"
              label="https://policies.google.com/technologies/ads"
              margin={{ horizontal: "xsmall" }}
            />
          </Text>
        </HeadingContainer>
        <HeadingContainer heading="Our Advertising Partners">
          <Text>
            Some of advertisers on our site may use cookies and web beacons. Our
            advertising partners are listed below. Each of our advertising
            partners has their own Privacy Policy for their policies on user
            data. For easier access, we hyperlinked to their Privacy Policies
            below.
          </Text>
          <ul>
            <li style={{ fontSize: "18px" }}>
              <Text>Google</Text> <br />
            </li>
          </ul>
          <Anchor
            href="https://policies.google.com/technologies/ads"
            label="https://policies.google.com/technologies/ads"
            margin={{ left: "medium" }}
          />
          <br />
        </HeadingContainer>
        <HeadingContainer heading="Advertising Partners Privacy Policies">
          <Text>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Pinpointstay.
            <br />
            <br />
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Pinpointstay,
            which are sent directly to users' browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.
            <br />
            <br />
            Note that Pinpointstay has no access to or control over these
            cookies that are used by third-party advertisers
          </Text>
        </HeadingContainer>
        <HeadingContainer heading="Third Party Privacy Policies">
          <Text>
            Pinpointstay's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options. You can choose to disable cookies
            through your individual browser options.
            <br />
            <br />
            To know more detailed information about cookie management with
            specific web browsers, it can be found at the browsers' respective
            websites.
          </Text>
        </HeadingContainer>
        <HeadingContainer heading="CCPA Privacy Rights (Do Not Sell My Personal Information)">
          <Text>
            Under the CCPA, among other rights, California consumers have the
            right to:
            <br />
            <br />
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
            <br />
            <br />
            Request that a business delete any personal data about the consumer
            that a business has collected.
            <br />
            <br />
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
            <br />
            <br />
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Text>
        </HeadingContainer>
        <HeadingContainer heading="GDPR Data Protection Rights">
          <Text>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
            <br />
            <br />
            The right to access ??? You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
            <br />
            <br />
            The right to rectification ??? You have the right to request that we
            correct any information you believe is inaccurate.
            <br />
            <br />
            You also have the right to request that we complete the information
            you believe is incomplete.
            <br />
            <br />
            The right to erasure ??? You have the right to request that we erase
            your personal data, under certain conditions.
            <br />
            <br />
            The right to restrict processing ??? You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
            <br />
            <br />
            The right to object to processing ??? You have the right to object to
            our processing of your personal data, under certain conditions.
            <br />
            <br />
            The right to data portability ??? You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
            <br />
            <br />
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Text>
        </HeadingContainer>
        <HeadingContainer heading="Children's Information">
          <Text>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
            <br />
            <br />
            Pinpointstay does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </Text>
        </HeadingContainer>
      </Box>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
