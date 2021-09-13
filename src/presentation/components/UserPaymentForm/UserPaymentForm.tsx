import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useStyles } from "./user-payment-form.style";
import { useForm } from '../../../presentation/hooks/useForm';
import { updateUserPayment } from "../../../domain/redux/slice/checkoutform-slice";
import { getPaymentInfo } from '../../../domain/redux/selector/checkout.selector';
import {
    requiredField,
    creditCardValidator,
    expirationDateValidator
} from '../../../presentation/utils/utils';

const formPayment = {
    card_number: {
        id: "id_card_number",
        value: "",
        error: null,
        required: true,
        validator: creditCardValidator
    },
    name_on_card: {
        id: "id_name_on_card",
        value: "",
        error: null,
        required: true,
        validator: requiredField
    },
    expiration: {
        id: "id_expiration",
        value: "",
        error: null,
        required: true,
        validator: expirationDateValidator
    },
    security_code: {
        id: "id_security_code",
        value: "",
        error: null,
        required: true,
        validator: requiredField
    }
};

const UserPaymentForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const initData = useSelector(getPaymentInfo);
    const {
        form,
        handleInputValue,
        isValidForm
    } = useForm(formPayment, initData);

    useEffect(() => {
        if (isValidForm) {
            dispatch(updateUserPayment(isValidForm ? {
                card_number: form.card_number.value.replaceAll('-', ''),
                name_on_card: form.name_on_card.value.toUpperCase(),
                expiration: form.expiration.value,
                security_code: form.security_code.value
            } : null));
        }
        // eslint-disable-next-lineexce
    }, [isValidForm, form, dispatch]);

    return (
        <>
            <h2>Payment</h2>
            <Card className={classes.mainCard}>
                <CardContent className="card--content">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <InputMask
                                mask="9999-9999-9999-9999"
                                maskChar={null}
                                value={form.card_number.value}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="id_card_number"
                                label="Card number"
                                name="card_number"
                                onChange={handleInputValue}
                                onBlur={handleInputValue}
                                {...(form.card_number.error && { error: true, helperText: form.card_number.error })}
                            >
                                {(inputProps: any) => <TextField {...inputProps} />}
                            </InputMask>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="id_name_on_card"
                                label="Name on card"
                                name="name_on_card"
                                required
                                type="text"
                                className={classes.uppercase}
                                value={form.name_on_card.value}
                                onChange={handleInputValue}
                                onBlur={handleInputValue}
                                {...(form.name_on_card.error && { error: true, helperText: form.name_on_card.error })}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputMask
                                mask="99/99"
                                maskChar={null}
                                value={form.expiration.value}
                                onChange={handleInputValue}
                                onBlur={handleInputValue}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="id_expiration"
                                label="Expiration date (MM/YY)"
                                name="expiration"
                                required
                                {...(form.expiration.error && { error: true, helperText: form.expiration.error })}
                            >
                                {(inputProps: any) =>
                                    <TextField
                                        {...inputProps}
                                    />
                                }
                            </InputMask>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="id_security_code"
                                label="Security code"
                                name="security_code"
                                required
                                inputProps={{
                                    maxLength: 3,
                                    minLength: 3
                                }}
                                value={form.security_code.value}
                                onChange={handleInputValue}
                                onBlur={handleInputValue}
                                {...(form.security_code.error && { error: true, helperText: form.security_code.error })}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
};

export default UserPaymentForm;
