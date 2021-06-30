import './Features.scss';
import featuresOneImg from '../../images/illustration-editor-desktop.svg';

const FeaturesOne = () => {
  return (
    <section className='features'>
      <h2 className='features-title'>Designed for the future</h2>
      <div className='features-content'>
        <div className='feature-info'>
          <div className='feature'>
            <h3 className='features-heading'>
              Introducing an extensible editor
            </h3>
            <p className='features-desc'>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className='feature'>
            <h3 className='features-heading'>Robust content management</h3>
            <p className='features-desc'>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        <img
          src={featuresOneImg}
          alt='illustration of app'
          className='features-img'
        />
      </div>
    </section>
  );
};

export { FeaturesOne };
