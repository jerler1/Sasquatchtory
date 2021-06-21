import React, { useContext, useEffect } from "react";
import api from "../../api/index";
import "./Home.scss";
import { useForm } from "react-hook-form";
import ProfileContext from "../../Context/ProfileContext";
import Factory from "../../components/Factory/Factory";

const Home = () => {
  const { profile, setProfile } = useContext(ProfileContext);
  const {
    register,
    // formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    const activeProfileId = profile._id;
    const newProfile = await api.clearFactories(activeProfileId);

    try {
      for (let i = 0; i < formData.amount; i++) {
        const newFactory = await api.makeFactory();
        console.log("This is a new factory", newFactory);
        api
          .updateProfile(activeProfileId, {
            id: newFactory.data._id,
          })
          .then((data) => {
            console.log(data);
            setProfile(data.data);
          });
      }
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
        {profile ? (
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
                    <button type="submit" className="button">
                      Generate
                    </button>
                  </div>
                </form>
              </span>
            </h3>
          </div>
        ) : (
          <div className="rootFactoryGeneration">
            <h3>Please make/choose a profile.</h3>
          </div>
        )}
      </section>
      <section className="factoriesContainer">
        <div className="factoriesGrid">
          {/* {profile ? (profile.factories.map((factory) => {
            const factoryObject = await api.getFactoryById(factory);
            console.log("what is this?", factoryObject.data);
            <Factory factory={factory} />
          })) : ""} */}
          <Factory />
        </div>
      </section>
    </div>
  );
};

export default Home;
