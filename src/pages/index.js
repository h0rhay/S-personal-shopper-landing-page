import React from 'react';
import Layout from '../components/Layout';
import ProfilePreview from '../components/ProfilePreview';
import useProfiles from '../hooks/use-profiles';

const Index = () => {
    const profiles = useProfiles();

    return (
        <>
            <Layout>
                <h2>Selfridges personal shoppers</h2>
                <h3>Profiles:</h3>
                {profiles.map((profile) => (
                    <ProfilePreview key={profile.slug} profile={profile} />
                ))}
            </Layout>
        </>
    );
};

export default Index;
