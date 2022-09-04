import React, { FC, useState, useEffect, ReactNode, useRef } from "react";
import {} from "react";
import { ContainerSlider, Dots, ContainSlider, ContainDots } from "./styles";
import { slideProps } from "./Slider.types";
import { useScreen } from "../../hooks/use-screen";

const Slider: FC<slideProps> = (props) => {
  const { resources } = props;
  const { screen } = useScreen();
  const [qtdSlide, setQtdSlide] = useState<number>(0);
  const [itensPerScreen, setItensPerScreen] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [showDots, setShowDots] = useState<ReactNode>([]);
  const refContainer = useRef<HTMLDivElement>(null);
  const [currentCard, setCurrentCard] = useState<number>(0);
  const widthCard = 91.94;

  useEffect(() => {
    var itemForScreenAux = Math.round(screen / widthCard);
    var qtdSlideAux = resources.length / itemForScreenAux;

    setItensPerScreen(itemForScreenAux);
    setQtdSlide(qtdSlideAux);
  }, [resources, screen]);

  const movePage = (id: number) => {
    if (refContainer.current !== null) {
      let paddingCorrection = id !== 0 ? 45 : 0;
      refContainer.current.scrollLeft = +id * widthCard + paddingCorrection;
      setCurrentSlide(id);
    }
  };

  if (refContainer.current !== null) {
    var currentCardAux = 0;
    refContainer.current.addEventListener("scroll", () => {
      if (refContainer.current !== null) {
        let scrolled = refContainer.current.scrollLeft;
        let paddingCorrection = 45;
        currentCardAux = Math.round(
          (scrolled + screen - paddingCorrection) / widthCard
        );
      }
      setCurrentCard(currentCardAux);
    });
  }

  useEffect(() => {
    let currentPage = currentCard - itensPerScreen;
    if (currentPage > 0) {
      setCurrentSlide(currentPage);
    }
  }, [currentCard]);

  useEffect(() => {
    const firstPage = 1;
    const dotsAux = new Array(resources.length - itensPerScreen + firstPage);
    for (let i = 0; i < resources.length - itensPerScreen + firstPage; i++) {
      dotsAux.push(i);
    }
    setShowDots(
      dotsAux?.map((item) => (
        <Dots
          key={item}
          className={`${item === currentSlide && "active"}`}
          onClick={() => movePage(item)}
        ></Dots>
      ))
    );
  }, [resources.length, itensPerScreen, currentSlide]);

  return (
    <ContainSlider>
      <ContainerSlider ref={refContainer}>{resources}</ContainerSlider>
      <ContainDots>{showDots}</ContainDots>
    </ContainSlider>
  );
};

export default Slider;
