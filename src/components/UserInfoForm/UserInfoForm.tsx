import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useForm } from '../../hooks/useForm';
import { updateUserInfo } from "../../redux/slice/checkoutform-slice";
import { getUserInfo } from '../../redux/selector/checkout.selector';
import {
    emailValidator,
    requiredField,
    optionalField
} from '../../utils/utils';
import { useStyles } from './user-info-form.style';

const formUser = {
    email: {
        id: "id_email",
        value: "",
        error: null,
        required: true,
        validator: emailValidator
    },
    first_name: {
        id: "id_first_name",
        value: "",
        error: null,
        required: true,
        validator: requiredField
    },
    last_name: {
        id: "id_last_name",
        value: "",
        error: null,
        required: true,
        validator: requiredField
    },
    company: {
        id: "id_company",
        value: "",
        error: null,
        required: false,
        validator: optionalField
    },
    address: {
        id: "id_address",
        value: "",
        error: null,
        required: true,
        validator: requiredField
    },
    city: {
        id: "id_city",
        value: "",
        error: null,
        required: true,
        validator: requiredField
    }
};

const UserInfoForm = () => {
    const dispatch = useDispatch();
    const initData = useSelector(getUserInfo);
    const classes = useStyles();

    const {
        form,
        handleInputValue,
        isValidForm
    } = useForm(formUser, initData);

    useEffect(() => {
        dispatch(updateUserInfo(isValidForm ? {
            email: form.email.value,
            first_name: form.first_name.value,
            last_name: form.last_name.value,
            company: form.company.value,
            address: form.address.value,
            city: form.city.value,
        } : null));
        // eslint-disable-next-lineexce
    }, [isValidForm, form, dispatch]);

    return (<>
        <h2>Contact Information</h2>
        <Card className={classes.mainCard}>
            <CardContent className="card--content">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="id_email"
                            label="Email Address"
                            name="email"
                            value={form.email.value}
                            onChange={handleInputValue}
                            onBlur={handleInputValue}
                            {...(form.email.error && { error: true, helperText: form.email.error })}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="id_first_name"
                            label="First name"
                            name="first_name"
                            value={form.first_name.value}
                            onChange={handleInputValue}
                            onBlur={handleInputValue}
                            {...(form.first_name.error && { error: true, helperText: form.first_name.error })}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="id_last_name"
                            label="Last name"
                            name="last_name"
                            value={form.last_name.value}
                            onChange={handleInputValue}
                            onBlur={handleInputValue}
                            {...(form.last_name.error && { error: true, helperText: form.last_name.error })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="id_company"
                            label="Company (optional)"
                            name="company"
                            value={form.company.value}
                            onChange={handleInputValue}
                            onBlur={handleInputValue}
                            {...(form.company.error && { error: true, helperText: form.company.error })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="id_address"
                            label="Address"
                            name="address"
                            value={form.address.value}
                            onChange={handleInputValue}
                            onBlur={handleInputValue}
                            {...(form.address.error && { error: true, helperText: form.address.error })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="id_city"
                            label="City"
                            name="city"
                            value={form.city.value}
                            onChange={handleInputValue}
                            onBlur={handleInputValue}
                            {...(form.city.error && { error: true, helperText: form.city.error })}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </>)
};

export default UserInfoForm;
