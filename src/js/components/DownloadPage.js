import React, { Component } from 'react';
import PageContainer from './PageContainer';

class DownloadPage extends Component {
  constructor() {
    super();

    this.formRef = React.createRef();
  }

  _handleSubmit = () => {
    // setTimeout to prevent form clear before send
    setTimeout(() => {
      this.formRef.current.reset();
    });
  }

  render() {
    return (
      <PageContainer>
        <div className="download-page">
          <div className="box">
            <h1 className="title">DOWNLOAD</h1>
            <p>
              The download feature will be available soon!
              We are working on that to be released as soon as possible!
            </p>
            <p>
              But you can put your email in the form below and we
              will tell you when the download option be available.
            </p>

            <form
              action="https://github.us18.list-manage.com/subscribe/post?u=955f23a083dc8aff26326536a&amp;id=317ca42ec8&SIGNUP=DownloadPage"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              onSubmit={this._handleSubmit}
              ref={this.formRef}
            >
              <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Your email..." required />
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_955f23a083dc8aff26326536a_317ca42ec8" tabIndex="-1" value="" />
              </div>
              <input type="submit" value="SUBSCRIBE" name="subscribe" id="mc-embedded-subscribe" className="button" />
            </form>

          </div>
        </div>
      </PageContainer>
    );
  }
}

export default DownloadPage;
