import React from "react";
import "./Home.scss";
import { useForm } from "react-hook-form";

const Home = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitted");
    try {
        reset();
    } catch (error) {
        console.log("ERROR: ", error);
    }
  };

  return (
    <div className="homeContainer">
      <section className="rootNode">
        <div className="rootText">
          <h1>Root</h1>
        </div>
        <div className="rootFactoryGeneration">
          <h3>
            Generate how many factories?
            <span>
              <form
                className="rootGenerationForm"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <input
                  className="input is-primary"
                  type="number"
                  placeholder="Input a number."
                  {...register("amount", {
                    required: true,
                    pattern: /^[0-9]+$/,
                  })}
                ></input>
                <div className="buttonWrapper">
                    <button type="submit" className="button">Generate</button>
                </div>
              </form>
            </span>
          </h3>
        </div>
      </section>
      <section className="factories">Factory</section>
      <section className="generatedNumbers"></section>
    </div>
  );
};

export default Home;
