import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';

function ContentBox(data) {
    const { title, body } = data;
    return (
        <Card
            sx={{
                margin: '0 0 20px',
                boxShadow:
                    '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
                borderRadius: '4px',
            }}
        >
            <CardContent>
                <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                        display: 'flex',
                        fontSize: '16px',
                        lineHeight: '150%',
                        letterSpacing: '0.15px',
                        margin: '0 0 30px',
                    }}
                >
                    <AccountCircleIcon
                        sx={{
                            margin: '0 10px 0 0',
                        }}
                    />
                    {title}
                </Typography>
                <Typography variant="body2">{body}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">ACTION</Button>
                <Button size="small" startIcon={<VisibilityIcon />}>
                    Watch
                </Button>
            </CardActions>
        </Card>
    );
}

export default ContentBox;
