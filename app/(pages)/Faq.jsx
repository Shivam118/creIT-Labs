import React from "react";

const Faq = () => {
  return (
    <section
      className="w-full px-10 flex flex-col items-center justify-center bg-black text-white pb-10"
      id="faqs"
    >
      <h3 className="text-4xl mb-10">FAQs</h3>
      <div className="w-full max-w-[1100px] flex flex-col items-center justify-center">
        <div className="w-full my-4 p-4">
          <h4 className="text-xl mb-1">How does it work?</h4>
          <p className="text-base text-[#b6b6b6]">
            {`We have a team of engineers who are ready to work on your requests. You can schedule a meeting with us and we will assign an engineer to you.`}
          </p>
        </div>
        <div className="w-full my-4 p-4">
          <h4 className="text-xl mb-1">How many requests can I make?</h4>
          <p className="text-base text-[#b6b6b6]">
            {`You can make unlimited requests. We will work on one request at a time, and we will not start a new request until the previous one is completed. We will keep you updated on the progress of your requests, and you can always reach out to us through Slack.`}
          </p>
        </div>
        <div className="w-full my-4 p-4">
          <h4 className="text-xl mb-1">How fast are requests completed?</h4>
          <p className="text-base text-[#b6b6b6]">
            {`It totally depends on the project or work. We will give you an estimated time for the completion of your request. We will keep you updated on the progress of your requests, and you can always reach out to us through Slack.`}
          </p>
        </div>
        <div className="w-full my-4 p-4">
          <h4 className="text-xl mb-1">How do we communicate?</h4>
          <p className="text-base text-[#b6b6b6]">
            {`We communicate using our platform as well as over Slack if there are occasional, general details to discuss. We do not do frequent meetings by default and use meetings only when there are urgent issues to resolve and it's more efficient to clarify the details with a call.`}
          </p>
        </div>
        <div className="w-full my-4 p-4">
          <h4 className="text-xl mb-1">What is your refund policy?</h4>
          <p className="text-base text-[#b6b6b6]">
            {`Unfortunately, there are no refunds. If you're not satisfied with your subscription for any reason, please contact us and we'll do our best to resolve this.`}
          </p>
        </div>
        <div className="w-full my-4 p-4">
          <h4 className="text-xl mb-1">How secure is my data?</h4>
          <p className="text-base text-[#b6b6b6]">
            {`All communication is done over an SSL encrypted connection — the same technology used by online retailers and banks. All billing information is fully secured with Stripe, a certified PCI Service provider.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
