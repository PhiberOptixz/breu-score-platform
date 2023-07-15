import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button, Container } from "@mui/material";
// import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "./header";
import TextFieldGroup from "./TextFieldGroup";


// const useStyles = makeStyles((theme) => ({
//   pageContent: {
//     margin: theme.spacing(4, 0),
//     padding: theme.spacing(4),
//   },
//   submitButton: {
//     margin: "10px 0",
//     mentorForm: {
//       width: "100%",
//     },
//   },
//   mForm: {
//     margin: "8px",
//   },
// }));

const Score = ({ setOpenPopup }) => {
    //   const classes = useStyles();

    const { auth, domainReducer } = useSelector((state) => state);
    const [domainList, setDomainList] = useState([]);
    const dispatch = useDispatch();

    //   const technologyList = domainReducer?.getTechnologyList?.map((item) => {
    //     return {
    //       _id: item._id,
    //       name: item.name,
    //     };
    //   });

    //   useEffect(() => {
    //     if (auth.isAuthenticated) {
    //       dispatch(getTechnologyList());
    //       dispatch(getDomainList());
    //     }
    //   }, [auth.isAuthenticated]);

    //   const handleTechnology = (technology) => {
    //     formik.setFieldValue("selectTechnology", technology);
    //     const filteredList = domainReducer?.getDomainList?.filter(
    //       (item) => item?.technology?._id === technology?._id?.toString()
    //     );
    //     setDomainList(filteredList);
    //   };

    //   console.log("domainReducer in function",domainReducer)

    const formik = useFormik({
        initialValues: {
            qualification: "",
            professionalExperience: "",
            socialscore: "",
            patents: "",
            blog: "",
            presentation: "",
            design: "",
            framework: "",
            coding: "",
            debugging: "",
            architecture : "",
            implementation: "",
            teamwork: "",
            complexityhandling: "",
            conflictresolution: "",
            initiative: "",
            culturalFit: "",
            epresentation: "",
            communication: "",
            ownership: "",
            empathy: "",
            openness: "",
            plagiarism: "",
            trustissues: "",
            fakeinformation: "",
          
        },
        validationSchema: Yup.object({
            // scheduleDescription: Yup.string()
            //   .trim()
            //   .required("Schedule Description is required field"),
            qualification: Yup.number()
                .min(1)
                .required("Please enter the value")
                .typeError('Qualification value should be a number'),

            professionalExperience: Yup.number()
                .min(1)
                .required("Please enter the value")
                .typeError('ProfessionalExperience value should be a number'),

            socialscore: Yup.number()
                .min(1)
                .required("Please enter the value")
                .typeError('Socialscore value should be a number'),

            patents: Yup.number()
                .min(1)
                .required("Please enter the value")
                .typeError('Patents value should be a number'),

            blog: Yup.number()
                .min(1)
                .required("Please enter the value")
                .typeError('Blog value should be a number'),

            presentation: Yup.number()
                .min(1)
                .required("Please enter the value")
                .typeError('Presentation value should be a number'),

                //Reliability

            design: Yup.number()
                .min(1)
                .required("Please enter the value")
                .typeError('design value should be a number'),

                framework: Yup.number()
                .min(1)
                .required("Please enter the value")
                .typeError('framework value should be a number'),

            coding: Yup.number()
                .min(1)
                .required("Please enter the value")
                .typeError('coding value should be a number'),

            debugging: Yup.number()
                .min(1)
                .required("Please enter the value")
                .typeError('debugging value should be a number'),

            architecture : Yup.number()
                .min(1)
                .required("Please enter the value")
                .typeError('architecture  value should be a number'),

            implementation: Yup.number()
                .min(1)
                .required("Please enter the value")
                .typeError('implementation value should be a number'),


                //EI

            teamwork: Yup.number()
            .min(1)
            .required("Please enter the value")
            .typeError('teamwork value should be a number'),

            complexityhandling: Yup.number()
            .min(1)
            .required("Please enter the value")
            .typeError('complexityhandling value should be a number'),

            conflictresolution: Yup.number()
            .min(1)
            .required("Please enter the value")
            .typeError('conflictresolution value should be a number'),

            initiative: Yup.number()
            .min(1)
            .required("Please enter the value")
            .typeError('initiative value should be a number'),

            ownership : Yup.number()
            .min(1)
            .required("Please enter the value")
            .typeError('Ownership value should be a number'),
            
            epresentation : Yup.number()
            .min(1)
            .required("Please enter the value")
            .typeError('Presentation value should be a number'),

            communication: Yup.number()
            .min(1)
            .required("Please enter the value")
            .typeError('communication value should be a number'),
           
            empathy: Yup.number()
            .min(1)
            .required("Please enter the value")
            .typeError('Empathy value should be a number'),

            openness: Yup.number()
            .min(1)
            .required("Please enter the value")
            .typeError('Openness value should be a number'),
            
            //Undesirable 

            
            plagiarism: Yup.number()
            .min(1)
            .required("Please enter the value")
            .typeError('plagiarism value should be a number'),
           
            trustissues: Yup.number()
            .min(1)
            .required("Please enter the value")
            .typeError('Trustissues value should be a number'),

            fakeinformation: Yup.number()
            .min(1)
            .required("Please enter the value")
            .typeError('Fakeinformation value should be a number'),

        }),

        onSubmit: async (values) => {
            // console.log("submit value", values);
            const data = {
                qualification: values?.qualification,
                professionalExperience: values?.professionalExperience,
                name: values?.socialscore,
                presentation: values?.presentation,
                patents: values?.patents,
                blog: values?.blog,
                design:values?.design,
                framework: values?.framework,
                coding: values?.coding,
                debugging: values?.debugging,
                architecture : values?.architecture ,
                implementation: values?.implementation,
                teamwork: values?.teamwork,
                complexityhandling: values?.complexityhandling,
                conflictresolution: values?.conflictresolution,
                initiative: values?.initiative,
                culturalFit: values?.culturalFit,
                communication: values?.communication,
                epresentation: values?.epresentation,
                ownership: values?.ownership,
                empathy: values?.empathy,
                openness: values?.openness,
                plagiarism: values?.plagiarism,
                trustissues: values?.trustissues,
                fakeinformation: values?.fakeinformation,
            };
            //   dispatch(addFunctionData(data));
            // console.log("submit data",data)
            setOpenPopup(false);
        },
    });

    const handleReset = () => {
        formik.resetForm();
    }

    const renderForm = (

        <form
            // onSubmit={()=>alert("am in form Submit")}
            onSubmit={formik.handleSubmit}
            enableReinitialize={true}
            noValidate
            autoComplete="off"
        >
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}><h1>Believeability </h1></Grid>
                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Qualification"
                        name="qualification"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.qualification}
                        errors={
                            formik.touched.qualification &&
                                formik.errors.qualification
                                ? formik.errors.qualification
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Professional Experience"
                        name="professionalExperience"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.professionalExperience}
                        errors={
                            formik.touched.professionalExperience &&
                                formik.errors.professionalExperience
                                ? formik.errors.professionalExperience
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Social Score"
                        name="socialscore"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.socialscore}
                        errors={
                            formik.touched.socialscore && formik.errors.socialscore
                                ? formik.errors.socialscore
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Patents"
                        name="patents"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.patents}
                        errors={
                            formik.touched.patents &&
                                formik.errors.patents
                                ? formik.errors.patents
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Blog"
                        name="blog"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.blog}
                        errors={
                            formik.touched.blog &&
                                formik.errors.blog
                                ? formik.errors.blog
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        variant="outlined"
                        labelShink={true}
                        label="Presentation"
                        name="presentation"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.presentation}
                        errors={
                            formik.touched.presentation && formik.errors.presentation
                                ? formik.errors.presentation
                                : null
                        }
                    />
                </Grid>

        
                <Grid item xs={12} md={12}>
                    <h1>Reliability</h1>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Design"
                        name="design"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.design}
                        errors={
                            formik.touched.design &&
                                formik.errors.design
                                ? formik.errors.design
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Framework"
                        name="framework"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.framework}
                        errors={
                            formik.touched.framework &&
                                formik.errors.framework
                                ? formik.errors.framework
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Coding"
                        name="coding"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.coding}
                        errors={
                            formik.touched.coding && formik.errors.coding
                                ? formik.errors.coding
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Debugging"
                        name="debugging"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.debugging}
                        errors={
                            formik.touched.debugging &&
                                formik.errors.debugging
                                ? formik.errors.debugging
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Architecture "
                        name="architecture"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.architecture }
                        errors={
                            formik.touched.architecture  &&
                                formik.errors.architecture 
                                ? formik.errors.architecture 
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        variant="outlined"
                        labelShink={true}
                        label="Implementation"
                        name="implementation"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.implementation}
                        errors={
                            formik.touched.implementation && formik.errors.implementation
                                ? formik.errors.implementation
                                : null
                        }
                    />
                </Grid>


                <Grid item xs={12} md={12}>
                    <h1>EI</h1>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Team Work"
                        name="teamwork"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.teamwork}
                        errors={
                            formik.touched.teamwork &&
                                formik.errors.teamwork
                                ? formik.errors.teamwork
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Complexity Handling"
                        name="complexityhandling"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.complexityhandling}
                        errors={
                            formik.touched.complexityhandling &&
                                formik.errors.complexityhandling
                                ? formik.errors.complexityhandling
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Conflict Resolution"
                        name="conflictresolution"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.conflictresolution}
                        errors={
                            formik.touched.conflictresolution && formik.errors.conflictresolution
                                ? formik.errors.conflictresolution
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Initiative"
                        name="initiative"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.initiative}
                        errors={
                            formik.touched.initiative &&
                                formik.errors.initiative
                                ? formik.errors.initiative
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Cultural Fit"
                        name="culturalFit"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.culturalFit }
                        errors={
                            formik.touched.culturalFit  &&
                                formik.errors.culturalFit 
                                ? formik.errors.culturalFit 
                                : null
                        }
                    />
                </Grid>


                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Presentation"
                        name="epresentation"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.epresentation}
                        errors={
                            formik.touched.epresentation &&
                                formik.errors.epresentation
                                ? formik.errors.debepresentationugging
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        variant="outlined"
                        labelShink={true}
                        label="Communication"
                        name="communication"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.communication}
                        errors={
                            formik.touched.communication && formik.errors.communication
                                ? formik.errors.communication
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        labelShink={true}
                        variant="outlined"
                        label="Ownership "
                        name="ownership"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ownership }
                        errors={
                            formik.touched.ownership  &&
                                formik.errors.ownership 
                                ? formik.errors.ownership 
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        variant="outlined"
                        labelShink={true}
                        label="Empathy"
                        name="empathy"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.empathy}
                        errors={
                            formik.touched.empathy && formik.errors.empathy
                                ? formik.errors.empathy
                                : null
                        }
                    />
                </Grid>

                
                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        variant="outlined"
                        labelShink={true}
                        label="Openness"
                        name="openness"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.openness}
                        errors={
                            formik.touched.openness && formik.errors.openness
                                ? formik.errors.openness
                                : null
                        }
                    />
                </Grid>

                

                <Grid item xs={12} md={8}></Grid>
                <Grid item xs={12} md={12}>
                    <h1>Undesirable</h1>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        variant="outlined"
                        labelShink={true}
                        label="Plagiarism"
                        name="plagiarism"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.plagiarism}
                        errors={
                            formik.touched.plagiarism && formik.errors.plagiarism
                                ? formik.errors.plagiarism
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        variant="outlined"
                        labelShink={true}
                        label="Trust Issues"
                        name="trustissues"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.trustissues}
                        errors={
                            formik.touched.trustissues && formik.errors.trustissues
                                ? formik.errors.trustissues
                                : null
                        }
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextFieldGroup
                        variant="outlined"
                        labelShink={true}
                        label="Fake Information"
                        name="fakeinformation"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fakeinformation}
                        errors={
                            formik.touched.fakeinformation && formik.errors.fakeinformation
                                ? formik.errors.fakeinformation
                                : null
                        }
                    />
                </Grid>



                <Grid item xs={12} md={6} align="right">
                    <div>
                        <Button
                            buttonStyle="submit"
                            type="submit"
                            name="save"
                            color="primary"
                            //   className={classes.inputButtonFields}
                            variant="contained"
                        // onClick={submitForm}
                        >
                            Save
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} align="left">
                    <div>
                        <Button
                            buttonStyle="submit"
                            type="reset"
                            name="reset"
                            color="primary"
                            //   className={classes.inputButtonFields}
                            variant="contained"
                            onClick={handleReset}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );

    return (
        <> 
        <Header
        name="Scoring"
        caption="your opion is valuable"
        page={true}
     />
        <Container maxWidth="lg" className="adminAddNewEducator">
            {renderForm}
        </Container>
        </>
    );
};

export default Score;
