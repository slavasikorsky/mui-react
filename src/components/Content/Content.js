import { Pagination, Stack } from '@mui/material';
import { ContentBox } from './ContentBox';
import content from '../../data/content';

function Content() {
    return (
        <div>
            {content &&
                content.map((item) => (
                    <ContentBox
                        key={item.id}
                        title={item.title}
                        body={item.body}
                    />
                ))}
            <Stack spacing={2}>
                <Pagination
                    count={10}
                    color="secondary"
                    sx={{
                        margin: '0 auto',
                    }}
                />
            </Stack>
        </div>
    );
}

export default Content;
