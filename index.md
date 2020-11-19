# Keeping processes at design conditions

Original article: http://paws.kettering.edu/~sturgmancohen/introcontrols/designconditions.html

Chemical engineers conceive chemical processes by careful desing and refinement. These processes are designed to operate at a specific set of conditions that are deemed optimal in some sense, either safety of the plant and operators, environmental impact, or financial profit. Many times a complex combinations of all these factors is optimized for. Given that a lot of effort is spent on crafting operating conditions, it is worthwhile to maintain a process operating as closely as possible to those design conditions. This is not an easy task.

How are processes maintained at the designed operating conditions? Through automatic process control. Imagine you are the operator of a chemical plant in which there is a vessel that serves as a liquid holding tank. Perhaps the liquid will be fed to another unit in the process. It is imperative that the level of liquid in the tank does not fall to too low or to too high a value (or even to overflow!). In fact we would like to maintain the level of the liquid at a particular value, its set point.

Let's put you in control of such a tank. The following chart represents the liquid level in the tank (vertical axis) as a function of time (horizontal axis). You as the operator can change the inlet flow rate (in % of the maximum flow rate) to the tank by varying the speed of a pump. The outlet flow rate is a disturbance, it will vary depending on the downstream requirements of the plant. Your objective is to keep the level at set point despite any disturbances you may encounter. Try it out now by pressing play and moving the slide bar. Remember your objective is to keep the circles as close to the blue line as possible.



Inlet flowrate (%):

{ inletFlowRate = slider({ step: 0.01, value: 85 }) }
{ subscribe(inletFlowRate, setInletFlowRate) }

*Simulation 1: Manual control of tank level.*

{ button({ label: running ? "pause" : "run", dense: true, onClick: running ? stop : start  }) }

{ button({ label: "reset", dense: true, onClick: reset  }) }


{ a = tank({ value: level / 5, name: "A" }) }

{ graph }



If you are like most anyone else, you struggled with this. With this toy example, however, you can get better as you practice since the disturbances are always the same every time you run it. A real process would not behave in such a predictable manner. Can you imagine maintaining the tank level for a whole work shift (8 to 12 hours)? It is an impossible task. So lets see how an automatic controller improves the situation. The following chart uses the same physical model as above, except that this time there is a feedback controller installed. The parameters that you can tune tell the controller how to behave. Press play in the following demo and let the controller do the work.

*Simulation 2: Automatic control of the tank level.*

Inlet flowrate (%):
{ valueB = slider({ step: 0.01 }) } { valueB }

{ input({ label: "kp", type: "number" }) }
{ input({ label: "ki", type: "number" }) }
{ input({ label: "kd", type: "number" }) }

{ b = tank({ value: valueB / 100, name: "B" }) }

Very good performance, right? At this point you might be wondering, what do those parameters mean? How did we choose them? They seem rather arbitrary, no? In fact we followed a very old recipe to obtain them. For now, do not worry about their meaning but you might want to spend some time investigating how they affect performance. As a hint, higher values of each of the parameters result in more aggressive controllers. Can you confirm this? What do you think that means?

## Exercises

1. Use the manual control simulation and try to maintain the liquid level at set point. Report your score and describe your experience doing this. Was it difficult? What were the main issues?
2. Switch to automatic control with the default parameters. Record the default parameters and report the score. Was it better than manual control? How so?
3. Continue doing simulation experiments (see step 4 for examples) to probe what happens when the parameters of the controller are detuned (moved away from their default properly computed values). Make sure to record all your experiments including the values of the parameters, the score, and any interesting features of the plot like:
    1. Is the control of the level sluggish or does it approach the set-point quickly?
    1. Does the level “overshoot” its set-point as it is correcting for disturbances?
    1. Approximately, how quickly can the controller bring the level back to set-point?
    1. Is the response stable? That is, does it oscillate wildly, increase/decrease forever, or does it reach a final steady-state value? If it reaches the final steady-state value, is it the set-point?
4. Try the following experiments:
    1. Set ki and kd to zero. Test at least three different values of kp in the range from 0 to 40 and compare their scores. What do you notice about the responses?
    1. Describe what happens if you repeat part a) with a negative value for kp.
    1. Set kp and kd to zero. Test at least three different values of ki in the range from 0 to 40 and compare their scores. Contrast and compare the various values. How is the effect of parameter ki different to the effect of kp?
    1. Set kp and ki to zero. Test at least three different values of kd in the range from 0 to 40 and compare their scores. Contrast and compare the various values. How is the effect of parameter ki different to the effect of kp?
