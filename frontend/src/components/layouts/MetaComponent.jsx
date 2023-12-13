import { Helmet, HelmetProvider } from 'react-helmet-async';

const MetaComponent = (meta)=>{
    return (
        <HelmetProvider>
               <Helmet>
                    <title data-rh="true">{meta.props.title ?? 'Your Page Title'}</title>
                    <meta data-rh="true" name="description" content={meta.props.description ?? 'Your page description.'} />
                    <meta data-rh="true" property="og:title" content={meta.props.og_title ?? 'Your Open Graph Title'} />
                    <meta data-rh="true" property="og:description" content={meta.props.og_description ?? 'Your Open Graph Description'} />
                    <meta data-rh="true" property="og:image" content={meta.props.og_image ?? 'url-to-your-image'} />
                </Helmet>
        </HelmetProvider>
    )
}

export default MetaComponent;