import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Badge,
    Box,
    CircularProgress,
    Dialog,
    DialogContent,
    Divider,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import XIcon from '@mui/icons-material/Close';



export const ContentSearchDialog = (props) => {
    const { onClose, open, ...other } = props;
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setShowResults(false);
        setIsLoading(true);

    };

    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            onClose={onClose}
            open={!!open}
            {...other}>
            <Box
                sx={{
                    alignItems: 'center',
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    display: 'flex',
                    justifyContent: 'space-between',
                    px: 3,
                    py: 2
                }}
            >
                <Typography variant="h6">
                    Search
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={onClose}
                >
                    <XIcon fontSize="small" />
                </IconButton>
            </Box>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon fontSize="small" />
                                </InputAdornment>
                            )
                        }}
                        label="Search"
                        onChange={(event) => setValue(event.target.value)}
                        placeholder="Search..."
                        sx={{ mt: 3 }}
                        value={value}
                    />
                </form>
                {isLoading && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 3
                        }}
                    >
                        <CircularProgress />
                    </Box>
                )}
                {/*{showResults && (*/}
                {/*    <>*/}
                {/*        {Object.keys(results).map((type, index) => (*/}
                {/*            <div key={index}>*/}
                {/*                <Typography*/}
                {/*                    sx={{ my: 2 }}*/}
                {/*                    variant="h6"*/}
                {/*                >*/}
                {/*                    {type}*/}
                {/*                </Typography>*/}
                {/*                <Box*/}
                {/*                    sx={{*/}
                {/*                        borderColor: 'divider',*/}
                {/*                        borderRadius: 1,*/}
                {/*                        borderStyle: 'solid',*/}
                {/*                        borderWidth: 1*/}
                {/*                    }}*/}
                {/*                >*/}
                {/*                    {results[type].map((result, index) => (*/}
                {/*                        <Fragment key={result.title}>*/}
                {/*                            <Box sx={{ p: 2 }}>*/}
                {/*                                <Box*/}
                {/*                                    sx={{*/}
                {/*                                        alignItems: 'center',*/}
                {/*                                        display: 'flex'*/}
                {/*                                    }}*/}
                {/*                                >*/}
                {/*                                    <Badge*/}
                {/*                                        color="primary"*/}
                {/*                                        sx={{ ml: 1 }}*/}
                {/*                                        variant="dot"*/}
                {/*                                    />*/}
                {/*                                    <Typography*/}
                {/*                                        variant="subtitle1"*/}
                {/*                                        sx={{ ml: 2 }}*/}
                {/*                                    >*/}
                {/*                                        {result.title}*/}
                {/*                                    </Typography>*/}
                {/*                                </Box>*/}
                {/*                                <Typography*/}
                {/*                                    color="textSecondary"*/}
                {/*                                    variant="body2"*/}
                {/*                                >*/}
                {/*                                    {result.path}*/}
                {/*                                </Typography>*/}
                {/*                                <Typography*/}
                {/*                                    color="textSecondary"*/}
                {/*                                    variant="body2"*/}
                {/*                                    sx={{ mt: 1 }}*/}
                {/*                                >*/}
                {/*                                    {result.description}*/}
                {/*                                </Typography>*/}
                {/*                            </Box>*/}
                {/*                            {(index !== results[type].length - 1) && <Divider />}*/}
                {/*                        </Fragment>*/}
                {/*                    ))}*/}
                {/*                </Box>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </>*/}
                {/*)}*/}
            </DialogContent>
        </Dialog>
    );
};

ContentSearchDialog.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
};
