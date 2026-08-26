# Electrochemical biomass upgrading: degradation of glucose to lactic acid on a copper(ii) electrode

**Document type:** license-permitted full-text Markdown transcription

**Authors:** Lars Ostervold, Sergio I. Perez Bakovic, Jamie Hestekin, Lauren F. Greenlee

**Publication:** RSC Advances, 2021, 11(50), 31208–31218

**DOI:** [10.1039/d1ra06737k](https://doi.org/10.1039/d1ra06737k)

**Archival source:** [PMC9041372](https://pmc.ncbi.nlm.nih.gov/articles/PMC9041372/)

**License:** [CC BY-NC 3.0](https://creativecommons.org/licenses/by-nc/3.0/)

**Related conference dissemination:** AIChE 2021 Annual Meeting, paper 123f, [session record](https://proceedings.aiche.org/conferences/aiche-annual-meeting/2021/proceeding/session/electrocatalysis-and-photoelectrocatalysis-iii-organic-electrocatalysis). The conference record is not counted as a separate study because it presents the same titled research line.

> This Markdown transcription was mechanically adapted from the JATS XML archived by PubMed Central. It preserves the article prose, headings, tables, figure captions, equations, acknowledgements, and references. Figures remain linked to the archival source. Cite the original article, not this transcription.

## Abstract

Biomass upgrading – the conversion of biomass waste into value-added products – provides a possible solution to reduce global dependency on nonrenewable resources. This study investigates the possibility of green biomass upgrading for lactic acid production by electrochemically-driven degradation of glucose. Herein we report an electrooxidized copper(ii) electrode which exhibits a turnover frequency of 5.04 s<sup>−1</sup> for glucose conversion. Chronoamperometry experiments under varied potentials, alkalinity, and electrode preparation achieved a maximum lactic acid yield of 23.3 ± 1.2% and selectivity of 31.1 ± 1.9% (1.46 V *vs.* RHE, 1.0 M NaOH) for a room temperature and open-to-atmosphere reaction. Comparison between reaction conditions revealed lactic acid yield depends on alkalinity and applied potential, while pre-oxidation of the copper had a negligible effect on yield. Post-reaction cyclic voltammetry studies indicated no loss in reactivity for copper(ii) electrodes after a 30 hour reaction. Finally, a mechanism dependent on solvated Cu<sup>2+</sup> species is proposed as evidenced by similar product distributions in electrocatalytic and thermocatalytic systems.

## Introduction

Biomass upgrading, the conversion of biomass waste into value-added products, provides a possible solution to reduce global dependency on nonrenewable resources. Among value-added products, lactic acid has garnered much attention due to its large market – 1.2 billion kg in 2016 (Grand View Research).<sup>1</sup> The current industries that employ lactic acid are numerous – food processing, pharmaceuticals, cosmetics, chemical production<sup>2</sup> – and, while exact numbers vary, the market for lactic acid is projected to maintain an annual growth rate of >12% with a market >4 billion USD by 2022.<sup>1,3</sup> The current production technology of fermentation (responsible for 90% of lactic acid production<sup>1</sup>) produces a slurry of products, where separation steps account for 40–70% of the total production cost of lactic acid.<sup>4</sup> Combine this energy-inefficient production process with the possibility of lactic acid production from biomass waste products,<sup>5,6</sup> and the opportunity for a more selective and greener conversion process through catalysis becomes apparent. In this work, we explore the possibility of producing lactic acid by a green, electrochemically-driven, biomass upgrading process.

Biomass waste products with potential as a starting point for lactic acid production come in two primary forms – glycerol<sup>5</sup> and cellulose.<sup>6</sup> The conversion of glycerol to lactic acid is an active field,<sup>7</sup> but the present work will focus on cellulose as the starting substrate. Waste cellulose has several sources (food-waste, paper milling, forestry, algal biomass),<sup>8,9</sup> but the most abundant cellulose waste products are from agriculture.<sup>10–12</sup> Cellulose is an organic polymer composed of monomer units of glucose. Before being converted to lactic acid, the cellulose must be hydrolyzed into glucose.<sup>13</sup> The hydrolyzation of cellulose to glucose is a well-understood field;<sup>14–16</sup> therefore, we use glucose as the starting substrate instead of cellulose.

The majority of studies on lactic acid production from glucose have employed thermally-driven systems with catalysts aimed at controlling glucose degradation products.<sup>6</sup> The most promising progressions towards green reaction conditions were made by Choudhary *et al.*,<sup>17</sup> Deng *et al.*,<sup>18</sup> and Li *et al.*<sup>19</sup> Choudhary *et al.*<sup>17</sup> were the first to report high lactic acid yields (70%) at moderate temperatures (120 °C) by employing a Cu/MgO catalyst. The main drawbacks were the anaerobic atmosphere (0.4 MPa Ar) and the high temperature required, although 120 °C was a lower temperature than preceding studies. Deng *et al.*<sup>18</sup> increased the lactic acid yield (81%) but raised the reaction temperature to 180 °C. Deng *et al.* utilized an Al(iii)–Sn(ii) catalyst – the bimetallic composition catalyzing the rate-limiting steps of glucose–fructose isomerization and C3–C4 cleavage, respectively.

The most promising results to date were achieved by Li *et al.*<sup>19</sup> who employed a Ba(OH)<sub>2</sub> salt catalyst and reported a lactic acid yield of 95.4% at room temperature. The downsides to the system employed include a high catalyst-to-substrate ratio (10 : 1 by molarity), long reaction times (48 h), and an inert atmosphere (1 bar N<sub>2</sub>). The timescale of the Li *et al.* system offers little to no advantage over the timescales of fermentation. Progress has thus been made towards producing lactic acid from glucose at conditions that could replace fermentation, but a system with both high selectivity and optimized kinetics, while maintaining green conditions, has yet to be developed.

A possibility for improvement lies in an electrochemical system, which can provide numerous advantages over traditional reactors, including high energy efficiencies in chemical conversion, higher practical efficiencies,<sup>20</sup> low reaction temperatures and pressures compared to hydrothermal reactions, facile separation due to heterogenous catalysis, and the ability to be driven by renewable energy.<sup>21,22</sup> The majority of previous electrochemical studies on glucose have been focused on glucose sensing for blood-sugar monitoring but have given insight into the mechanism of the reaction.<sup>23</sup>

Relatively few studies have been concerned with the products of glucose electrodegradation.<sup>24–32</sup> Of studies concerned with products, only a few studies did not use precious metals as a catalyst.<sup>26–29</sup> Studies have also predominately avoided carbon–carbon bond cleavage, as desired products were six-carbon molecules such as glucaric acid or gluconic acid.<sup>24–27</sup> Only Moggia *et al.* have mentioned the production of smaller carbon molecules in a study focused on gluconic acid production, where the authors reported 54.2% formic acid (a one-carbon molecule) production by a copper electrode.<sup>28</sup> To the best of our knowledge, no research has been published directly focused on production of carbon–carbon cleavage products from glucose electrodegradation, including lactic acid.

Given the lack of electrocatalyst development for glucose conversion to lactic acid, we approached catalyst selection based on progress made in the thermal catalysis literature. We hypothesized that mechanistic understanding of catalyst design from thermocatalytic production of lactic acid may be roughly translated to an electrochemical environment, providing a green pathway for lactic acid production from biomass. To test our hypothesis, we focused on a copper electrode in an alkaline environment since copper catalysts and alkaline environments are both common to thermocatalytic systems for glucose conversion. Cyclic voltammetry studies were first performed to evaluate electrode activity toward glucose. After discovering a large glucose oxidation peak, we used chronoamperometry studies in a room temperature, open-to-atmosphere reactor to degrade glucose. Product solutions were analyzed by high-performance liquid chromatography and the presence of lactic acid was confirmed. Upon the successful production of lactic acid, preliminary investigations into key reaction parameters were made through further electrochemical studies.

## Experimental

### Chemicals and solutions

d-Glucose (≥99.5%) was obtained from Sigma-Aldrich. Sodium hydroxide pellets (ACS grade), d-fructose (99%), potassium hydroxide pellets (≥85%), 5-hydroxymethylfurfural (≥97%), 1,3-dihydroxyacetone (≥97%), and pyruvic acid (≥98%) were all obtained from VWR. Lactic acid (85%), formic acid (85%), acetic acid (glacial), and glyceraldehyde (95%, dimer) were all obtained from Fischer Scientific. Electrolyte (KOH and NaOH) stock solutions were prepared and stored at room temperature; these stock solutions were used for all experiments. Solutions were prepared with deionized water from a Milli-Q Direct Water Purification system (18.2 MOhm cm).

### Electrode preparation

Copper foil (99.999%, 1.0 mm thick) was obtained from Sigma-Aldrich and cut into 1.0 cm × 2.5 cm pieces by a metal hand shear. Raw copper was sonicated for 10 minutes in 0.1 M HCl (<20 °C), polished with successive alumina slurries of 5 μm, 1 μm, 0.3 μm, and 0.05 μm until the copper surface resembled a mirror-like shine. The copper foil was then sonicated for 10 minutes in acetone to remove any organic substances. After this process, Kapton tape was wrapped horizontally along the copper to expose a 1 cm × 1 cm surface on each side. To oxidize the surface, the copper foil was held for one hour at 1.03 V *vs.* RHE in 0.5 M KOH to achieve a Cu<sup>2+</sup> surface. This potential was selected based on a study performed by Giri *et al.*;<sup>33</sup> the potential for Cu<sup>2+</sup> oxidation was confirmed by our own cyclic voltammetry studies. Successful oxidation to a Cu<sup>2+</sup> surface was confirmed by X-ray photoelectron spectroscopy (XPS). This catalyst synthesis is not novel, and detailed characterization can be found in prior literature.<sup>34</sup>

### Electrochemical experiments

All electrochemical experiments were performed using an SP-300 potentiostat/galvanostat from Biologic, where Hg/HgO (4.24 M KOH), platinum coil, and copper foil (as prepared in previous section) were used as the reference, counter, and working electrodes, respectively. Data were collected with EC-Lab software, and all potentials were converted to potential *vs.* RHE by the form of the Nernst equation below: *E*<sub>RHE</sub> = *E*<sub>Hg/HgO</sub> + 0.059pH + 0.098

A two-compartment borosilicate glass cell (Adams & Chittenden) was used as the reaction vessel for all experiments. The internal resistance of the cell was measured before all experiments (cyclic voltammetry or chronoamperometry) and was compensated at 85%. When applicable, solutions were mixed under light stirring until all reagents were completely dissolved. There was no stirring during reactions. All electrochemical studies were performed at room temperature in an open-to-atmosphere reaction vessel.

### Product stream analysis

All samples were analyzed by high-performance liquid chromatography (Alliance HPLC System) equipped with a refractive index detector (Waters 2414) using an HPX-87H column (Aminex, Bio-Rad) at 25.0 °C. The eluent used was 10 mM sulfuric acid in deionized water (18.2 MOhm cm) running isocratically at 0.4 mL min<sup>−1</sup>. The sample injection volume was 30 μL, and samples were run for 35 minutes.

External standards analyzed included: lactic acid, formic acid, 5-hydroxymethylfurfural, fructose, glucose, acetic acid, dihydroxyacetone, glyceraldehyde, and pyruvic acid. Time samples from the reaction vessel were obtained by pipetting 200 μL from the reaction vessel into 1800 μL of 0.1124 M HCl, and samples were stored at 4 °C. The stability of the samples over 48 hours under the specified conditions was tested, and no quantifiable change was detected. Two samples were taken at the start of each reaction, and three samples were taken at the conclusion of a reaction.

### X-ray photoelectron spectroscopy

X-ray photoelectron spectroscopy (XPS) was performed on a PHI Versaprobe 5000, and analysis was done with CasaXPS software (XPS figures were produced in Origin). A monochromated Al Kα source, along with Ar and C-60 cluster ion guns, was used. An initial survey scan of 0–1200 eV was carried out on the samples, followed by detailed binding energy region scans of copper and oxygen (Fig. 1).

**Fig. 1 — X-ray photoelectron spectroscopy of the Cu 2p region (a) and the O 1s region (b) for copper electrodes with no electrooxidation (black) and 1 hour of oxidation (blue).**

[View figure in the PMC source](https://pmc.ncbi.nlm.nih.gov/articles/PMC9041372/figure/fig1/)

### Calculations

Example calculations for all values listed in this study can be found in the ESI.†

## Results and discussion

### Electrode preparation

Thermocatalytic studies focused on lactic acid production were used to select the electrode material and oxidation state of the surface.<sup>6,17–19,35,36</sup> Divalent metallic catalysts generally achieved the best lactic acid yield, and of those, cupric oxide (CuO) was among the catalysts with the highest yields.<sup>17,37</sup> Therefore, a divalently-charged copper surface (Cu<sup>2+</sup>) was chosen as the working electrode for this system. After preparation, electrodes were analyzed by XPS to determine surface characteristics; survey spectra are presented in Fig. S1† and detailed region scan data are summarized in Fig. 1. In Fig. 1a, a shift to higher binding energies and a broadening of the Cu 2p<sub>3/2</sub> peak are observed. This shift is expected for a metal oxide or metal hydroxide species, and peak broadening suggests the presence of both metal oxide and metal hydroxide species.<sup>38</sup> The satellite peaks that appear around 962.4 eV, 943.8 eV, and 940.8 eV are characteristic of materials with a d<sup>9</sup> electron configuration, *i.e.*, a Cu<sup>2+</sup> species.<sup>39</sup> Small satellite peaks appear for Cu<sup>1+</sup> species, but the relative intensity of the peaks suggests predominately Cu<sup>2+</sup> species.<sup>40</sup> Additionally, a right-leaning shoulder on the Cu 2p<sub>3/2</sub> (933.0 eV) or Cu 2p<sub>1/2</sub> (952.8 eV) peaks is expected if considerable amounts of Cu<sup>1+</sup> are present; the lack of the shoulder for spectra of the oxidized electrode (blue line, Fig. 1a) indicates lack of Cu<sup>1+</sup> species on the oxidized electrode.<sup>41,42</sup>

In the oxygen 1s region (Fig. 1b), the presence of the O 1s peak on the electrode with no oxidation is likely explained by organic contamination since carbon was also detected on the unoxidized electrode. Peak fitting for the O 1s region supported this conclusion (Fig. S2†). The doublet peak (531.4 eV and 529.8 eV) indicates the presence of two species. Supported by expected values from Moulder *et al.*<sup>38</sup> and similar analyses,<sup>43–45</sup> we conclude the peak at 531.4 eV is caused by Cu(OH)<sub>2</sub> species, and the peak at 529.8 eV is caused by CuO species. By a combination of XPS data with the previous literature on copper electrooxidation (discussed in succeeding section), we conclude that Cu was oxidized to both CuO and Cu(OH)<sub>2</sub> species, and little to no Cu<sub>2</sub>O species remain, as also indicated by the lack of expected reduction peak in Fig. 2 (discussed below) and the relative intensity of the Cu<sup>2+</sup> satellite in Fig. 1a. The presence of Cu(OH)<sub>2</sub> is expected based on previous literature concerning the electrooxidation of copper.<sup>33</sup>

**Fig. 2 — Cyclic voltammetry at a scan rate of 50 mV s−1 in 1.0 M NaOH (pH = 13.6) solution with 0.1 M glucose (blue) and in the absence of glucose (black). The working electrode was Cu foil (2 cm2) after being oxidized for 1 hour. The reference and counter electrodes were Hg/HgO and platinum coil, respectively. Both sets of data are taken from the 5th cycle.**

[View figure in the PMC source](https://pmc.ncbi.nlm.nih.gov/articles/PMC9041372/figure/fig2/)

### Activity of copper electrode towards glucose

A set of cyclic voltammetry (CV) studies was used to prove the oxidized copper electrode exhibits activity towards glucose. CVs were compared in the presence and absence of glucose (Fig. 2). First, each peak related to copper surface redox reactions in the absence of glucose was identified. The cyclic voltammetry of copper in the absence of glucose shows four distinct oxidation peaks (A–D) and four distinct reduction (E–H) peaks (Fig. 2, black). For assistance in understanding cyclic voltammetry, we refer the reader to an introductory cyclic voltammetry article by Elgrishi *et al.*<sup>46</sup>

#### Anodic/forward sweep (peaks A–C)

Peak A is attributed to the oxidation of Cu to Cu<sub>2</sub>O.<sup>33,47–49</sup> The formation of Cu(OH) species are also proposed at peak A,<sup>50</sup> but the standard oxidation potential for the oxidation of Cu<sup>0</sup> to Cu(OH) is 0.2635 V *vs.* RHE,<sup>33</sup> so this reaction is unlikely to occur at peak A. Peaks B and C are closely related and, under some conditions, will appear as a single peak during cyclic voltammetry experiments. The proposed reaction occurring at peaks B and C involves the oxidation of Cu or Cu<sub>2</sub>O species to Cu(OH)<sub>2</sub> or soluble Cu(OH)<sub>4</sub><sup>2−</sup> species at peak B,<sup>51</sup> with two additional proposed reactions for peak C – the conversion of Cu(OH)<sub>4</sub><sup>2−</sup> species into Cu(OH)<sub>2</sub> and the direct oxidation of metallic Cu to CuO.<sup>33,52</sup> Formation of soluble species is also evidenced by visible cratering of the electrode surface after prolonged potential-hold experiments. An alternatively proposed mechanism for peaks B and C is the is the two-electron oxidation of Cu directly to Cu(OH)<sub>2</sub> at B and oxidation of Cu(OH) to Cu(OH)<sub>2</sub> at C, after which the Cu(OH)<sub>2</sub> species may form CuO by a dehydration chemical reaction.<sup>50</sup> This mechanism depends on the formation of Cu(OH) species prior to peak C, which, as discussed earlier, is not supported by the standard oxidation potential for Cu<sup>0</sup> to Cu(OH).

#### Cathodic/reverse sweep (peaks F–H)

The processes occurring at peaks F–H are debated but unanimously attributed to copper redox processes. Giri *et al.*<sup>33</sup> propose that peak F is predominantly the reduction of CuO to Cu. Peaks G and H, which appear in Giri *et al.*<sup>33</sup> as a single peak with a shoulder due to lower alkalinity, are reductions of a soluble species and other oxidation products formed in peaks B and C. The conclusions by Giri *et al.*<sup>33</sup> were reached by a series of experiments in which the turnaround voltage was varied. Note that a redox couple for the reduction of Cu<sub>2</sub>O is not mentioned as the reduction peak does not appear in Fig. 2. The reduction peak for Cu<sub>2</sub>O only appears if the potential is reversed before reaching peak B,<sup>33</sup> indicating all or most Cu<sub>2</sub>O species are further oxidized at potentials greater than ∼0.80 V *vs.* RHE.

#### Peaks D and E

Traditionally, peak D is widely ascribed to a Cu<sup>2+</sup> to Cu<sup>3+</sup> oxidation;<sup>50–54</sup> in other words, the formation of a Cu<sub>2</sub>O<sub>3</sub> or CuOOH from CuO or Cu(OH)<sub>2</sub>. Peak E is the redox pairing to peak D, so peak E has been attributed to the reduction of Cu<sup>3+</sup> species to Cu<sup>2+</sup>. There is considerable debate surrounding the existence of Cu<sup>3+</sup> species and the processes and species contributing to peaks D and E.<sup>55–62</sup> However, we will continue to refer to the third oxidation state of copper as Cu<sup>3+</sup> although formal Cu<sup>3+</sup> may not exist.<sup>55</sup>

#### Glucose oxidation

Upon addition of glucose to the solution, a new redox peak appeared indicating glucose was electroactive. In the presence of 0.1 M glucose (Fig. 2, blue), a large oxidation peak appears at 1.58 V *vs.* RHE, which can be attributed to the oxidation of glucose and is consistent with previous studies.<sup>28</sup> Two noteworthy features of the glucose oxidation peak are (1) that glucose oxidation occurs on both the forward and reverse sweeps, and (2) both of the oxidation peaks are symmetrical. An adsorbed substrate usually explains peak symmetry, and other studies support the applicability of that idea to this system.<sup>63</sup> The double oxidation peak, along with the shape of the downslope of the peak, indicates blocking of active sites of the copper. This blockage could be from competitive adsorption of another species, or failed desorption of glucose oxidation products.

#### Cyclic voltammetry of pre-oxidized versus as-received copper electrode

When CVs of the as-received and pre-oxidized copper electrodes were compared, the largest difference observed between the two electrodes (Fig. 3) was the measured current density. The pre-oxidized electrode (Fig. 3, blue) resulted in 70% of the measured current density of the as-received (but pre-cleaned) electrode (Fig. 3, black). To explain the reduced current density of the pre-oxidized electrode, we note two possible limiting mechanisms (one on each side of the glucose oxidation peak), as proposed by Xie and Huber.<sup>64</sup> On the left side of the glucose oxidation peak, the limiting mechanism is hydroxide adsorption and on the right side of the peak, the limiting component is glucose diffusion.<sup>64</sup> In the pre-oxidized electrode, CuO and Cu(OH)<sub>2</sub> species already dominate the surface, *i.e.*, the hydroxide ions are already adsorbed; therefore, the reaction should enter the secondary limiting mechanism, glucose diffusion or kinetic limitations, more rapidly. This theory of two limiting mechanisms also explains the plateau-like behavior of the prepared electrode. Additionally, the pre-oxidation procedure may cause changes to the available surface site density for glucose adsorption and redox reactions. As a result, even though the same copper electrode foils were used as a starting electrode, the actual surface site density may have been different.

**Fig. 3 — Cyclic voltammetry at a scan rate of 50 mV s−1 in 1.0 M NaOH (pH = 13.6) solution with 0.1 M glucose with electrode oxidized for 1 hour (orange) and bare copper electrode (black). Both electrodes Cu foil (2 cm2) – reference and counter electrodes were Hg/HgO and platinum coil, respectively. Both sets of data are taken from the 5th cycle of the scan.**

[View figure in the PMC source](https://pmc.ncbi.nlm.nih.gov/articles/PMC9041372/figure/fig3/)

### Product yield under varying conditions

The goals of the product yield study were to confirm production of lactic acid and assess the quantitative conversion of glucose to lactic acid and other by-products. A thorough pathway discussion is given later, and a simplified progression of the reaction is seen in Scheme 1. Fructose exists in isomerization with glucose and can be considered as an unconverted reactant while formic acid can be viewed as an ‘over-reaction’ product, due to either excessive oxidation or C–C bond cleavage. Product solutions were analyzed by HPLC with a refractive index and UV detector, as detailed in the experimental section. Lactic acid production was doubly confirmed by an external standard (Fig. S3†) comparison to a reaction chromatogram (Fig. S4†) and spiking a reaction sample with purified lactic acid (Fig. S5†). Both of the tests indicated the presence of lactic acid, supporting our primary hypothesis that a copper oxide-based electrode will enable conversion of glucose to lactic acid. Having confirmed the possibility of the reaction, a preliminary study to optimize lactic acid yield was performed.

**Scheme 1 — Simplified reaction scheme for the electrochemical oxidation of glucose. UOP is unknown oxidation process.**

[View figure in the PMC source](https://pmc.ncbi.nlm.nih.gov/articles/PMC9041372/figure/sch1/)

Three parameters were varied to test their effect on product yield. From previous electrochemical studies, carbon–carbon bond cleavage is also thought to occur at the glucose oxidation peak in Fig. 2.<sup>28</sup> Since lactic acid is a three-carbon molecule, some cleavage is required, but further degradation of lactic acid is ideally avoided. There may exist an optimal potential at which to achieve this condition, so voltages were varied to explore this hypothesis. The second parameter varied was alkalinity, as previous studies have shown alkalinity to play a role in both the rate and ratio of product formation in glucose degradation.<sup>65</sup> The final parameter varied is the oxidation time during preparation of the Cu<sup>2+</sup> electrode. Since the glucose degradation reaction is performed above the potential for Cu<sup>2+</sup> formation, the oxidation step in catalyst preparation may be unnecessary as the time copper spends in a Cu<sup>0</sup> state would be minimal; however, we wanted to confirm whether pre-oxidation of the copper electrode was required for glucose degradation. The reaction conditions are summarized in Table 1, and respective yields are shown in Fig. 4. Fig. 4 shows fructose and formic acid are the main undesired side-products, consistent with those reported in thermocatalytic literature.<sup>6</sup>

**Experimental conditions for six experiments designed to reveal the effect of relevant parameters on reaction yield. Conditions 1–3 vary voltage, condition 4 adjusts the alkalinity, and condition 5 does not oxidize the copper before the reaction. All conditions were 30 hour reactions performed inside a fume hood, open-to-atmosphere reaction vessel at room temperature**

| Condition | Potential (V *vs.* RHE) | Concentration of NaOH (M) | Cu electrode oxidation time (min) |
| --- | --- | --- | --- |
| 1 | **1.56** | 1.0 | 60 |
| 2 | **1.51** | 1.0 | 60 |
| 3 | **1.46** | 1.0 | 60 |
| 4 | 1.46 | **0.5** | 60 |
| 5 | 1.46 | 1.0 | **None** |

**Fig. 4 — Product distribution for the five conditions outlined in Table 1. Each condition was repeated three times and quantification was performed with external standards on high-performance liquid chromatography. Glucose concentration was 0.10 M for all conditions. Working electrode was Cu foil (2 cm2) after being oxidized for 1 hour (conditions 1–4, no oxidation for condition 5) – reference and counter electrodes were Hg/HgO and platinum coil, respectively. Quantitative data can be found in Table S1.†**

[View figure in the PMC source](https://pmc.ncbi.nlm.nih.gov/articles/PMC9041372/figure/fig4/)

The remaining carbons to complete the mass balance lie mostly in a mixture of six-carbon molecules (glucose oxidation products) along with other C–C bond cleavage products. Compounds besides the four quantified were not the focus of this study and were not quantified since Fig. 4 shows side-products would be in the minority of compounds.

#### Varying potential

The 1.56 V and 1.51 V conditions were comparable in product distributions. The only difference with >90% confidence interval was formic acid yield – 44.1% for 1.56 V and 47.8% for 1.51 V. Since both potentials fall within the Cu<sup>2+</sup> to Cu<sup>3+</sup> oxidation range, both potentials may experience a similar limiting mechanism.

Comparing the 1.56 V and 1.51 V conditions to 1.46 V, the concentration for all quantified species in the final solution varies with 95% confidence. The differences between the 1.46 V conditions and the 1.56 V and 1.51 V conditions can be explained by the C–C bond cleavage mechanism. Higher potentials should cause higher glucose conversion and formic acid yield while decreasing the lactic acid yield, which is the trend observed in Fig. 4. The higher fructose concentration for the 1.46 V condition indicates that C–C bonds in fructose are also susceptible to cleavage by electrochemically-driven processes. From these conditions, 1.46 V *vs.* RHE gave the highest lactic acid yield and selectivity (>95% confidence interval), indicating the ideal potential for this reaction resides in the lower potential range of the glucose oxidation peak for the conditions tested.

#### Varying alkalinity

For the 0.5 M NaOH trial and the no pre-oxidation trial, comparisons will be made in reference to the 1.46 V conditions since only one parameter varies between conditions.

All species in the final solution varied significantly (>95% confidence interval) when the alkalinity was halved from 1.0 M NaOH to 0.5 M NaOH. As expected, the glucose conversion decreased with decreased alkalinity, but the magnitude of this change was surprising. However, both the basicity of the solution and hydroxide ion interaction with the electrode promote glucose doegradation; the dual dependence on alkalinity could explain the extent of the change. The high concentration of fructose is explained by the dependence of the isomeric equilibrium of glucose and fructose on the concentration of hydroxide species.<sup>65</sup>

As expected, with a lower glucose conversion, the concentration of products also dropped; however, the drop in lactic acid selectivity (31.1 ± 1.9% for 1.0 M NaOH *vs.* 20.8 ± 4.7% for 0.5 M NaOH) is noted. While decreased selectivity is partially explained by the higher fructose concentration, the results indicate alkalinity plays an important role in lactic acid selectivity. In thermocatalytic literature, the isomerization between glucose and fructose plays an important role, as lactic acid is suggested to proceed from fructose.<sup>6,18,19,35,36</sup> Increasing the pH shifts the equilibrium towards fructose, and, intuitively, increases the lactic acid yield. However, an electrochemical system gives conflicting results compared to this expected result; with increasing pH, the lactic acid yield increases but the concentration of fructose decreases.

The conflicting result may be explained by considering the pH-dependence of carbohydrate oxidation on a copper electrode. Copper electrodes show increased activity with increased pH, likely due to the mechanism requiring an adsorbed hydroxide species.<sup>23,66,67</sup> These conclusions are supported by time sampling data for the 1.0 M NaOH and 0.5 M NaOH conditions (Fig. S6†). The glucose conversion is more rapid in 1.0 M NaOH and the equilibrium concentration for fructose is lower, likely due to increased degradation rates of fructose. The formic acid production rate also increases in 1.0 M NaOH, suggesting increased degradation and oxidation rates.

In an additional experiment, the salt was changed from NaOH to KOH, but no statistically significant differences in compound distribution were found.

#### Varying copper oxidation

Final concentrations for glucose and fructose between the one hour electrode pre-oxidation and the no pre-oxidation electrode differed with 95% confidence, while formic acid yield and lactic acid selectivity differed with only 90% confidence. Lactic acid yield showed no significant difference in yield between the two trials. For the no pre-oxidation condition, the lower final glucose and fructose concentrations indicate a more active electrode towards C–C bond cleavage.

The similar yields for formic and lactic acid could be explained by noticing the reaction is performed at 1.46 V *vs.* RHE, well above the oxidation potential for a Cu<sup>0</sup> to Cu<sup>2+</sup> transition, so CuO and Cu(OH)<sub>2</sub> species could form on the surface regardless of the pre-reaction oxidation.‡‡A study by Deng *et al.* with chemically-oxidized copper surfaces has indicated Cu<sup>2+</sup> species will not form from Cu<sup>0</sup> at these potentials,<sup>58</sup> but those studies were not performed in the presence of glucose and underwent different oxidation processes. The Cu–glucose complex that forms during this reaction and interactions thereof remain unstudied so conclusions from the Deng study cannot be applied to this system. The almost identical cyclic voltammetry results between pre-oxidized and unoxidized electrodes supports the idea of rapid Cu<sup>0</sup> oxidation to Cu<sup>2+</sup> without pre-oxidation (Fig. S10†).

#### Lactic acid production rate compared to fermentation

To determine whether lactic acid production by glucose electrodegradation is of any value, production rates must be compared to the rate of lactic acid production by fermentation (Table 2).

**Compares two efficiency indicators for lactic acid production for the glucose electrodegradation method and the fermentation method**

| System | g lactic acid·(g catalyst)<sup>−1</sup> | g lactic acid L<sup>−1</sup> h<sup>−1</sup> |
| --- | --- | --- |
| Electrodegradation | 0.23 | 0.140 |
| Fermentation<sup>68</sup> | 0.97 | 2.20 |

The fact that the production numbers for glucose electrodegradation are within an order of magnitude is promising for the method of lactic acid production by electrodegradation. For the present study, only preliminary efforts have been made to optimize lactic acid production as the main goal was to prove the possibility of producing lactic acid through electro-degradation of glucose. Improvements to lactic acid production rate and selectivity can be made through catalyst, electrode, and reactor design, with envisioned gains in production rate that could make electrochemical glucose conversion competitive.

### Electrode recyclability (pre- vs. post-reaction cyclic voltammetry)

Three CV studies were performed for each condition – one before the reaction, another after the reaction in the same solution, and then one in a new glucose solution (identical to pre-reaction solution) with the same electrode. These data are displayed in Fig. 5. The two goals for the experiments were to (1) assess electrode recyclability by testing the activity of a used electrode in a new solution and (2) determine if new electroactive products are formed during the reaction, indicated by new redox peaks in the cyclic voltammetry. The minimum potential for the CV experiments was kept above the reduction potential (0.6 V *vs.* RHE) for copper in order to maintain the CuO/Cu(OH)<sub>2</sub> layer formed during electrode preparation. Testing the activity of the catalysts by pre *vs.* post reaction CVs was validated by an integrated Cottrell test (Fig. S7†) and a Tafel slope analysis (Fig. S8†).

**Fig. 5 — Cyclic voltammetry performed at a scan rate of 50 mV s−1 in 1.0 M NaOH (pH = 13.6 and 13.2 for new and final solutions respectively). Starting glucose concentration was 0.1 M. Scans performed prior to the reaction (black), after a 30 hour 1.46 V chronoamperometry reaction in the same solution (orange), and in a new solution with the same electrode (blue) are all shown. Working electrode was Cu foil (2 cm2) after being oxidized for 1 hour (black) or oxidized for 1 hour plus a 30 hour reaction at 1.46 V vs. RHE (blue and orange) – reference and counter electrodes were Hg/HgO and platinum coil, respectively. All sets of data are taken from the 5th cycle of the scan. Pre- vs. post-reaction studies for all conditions can be found in Fig. S10.†**

[View figure in the PMC source](https://pmc.ncbi.nlm.nih.gov/articles/PMC9041372/figure/fig5/)

Additional redox peaks were not expected for the post-reaction CV in the same solution. Recall that C–C bond cleavage is expected to occur under the glucose oxidation peak; therefore, if glucose degradation products are electroactive, reactions of those products would likely fall underneath the same peak. However, in CV experiments involving expected products (Fig. S9†), the oxidation peak shifted to higher potentials relative to the glucose oxidation peak, reflecting the orange curve shift in Fig. 5. Therefore, we suspect the shift by the orange curve is indicative of the increase in glucose degradation products. This assertion is additionally supported by the fact that the glucose oxidation peak returns to its original potential in a new solution. The post-reaction peak does exhibit more plateau behavior compared to the pre-reaction peak, which is explained by considering the limiting-mechanism discussion related to Fig. 3.

The most important conclusion from this experiment comes from comparing peak current in the pre-reaction solution (Fig. 5, black) to the post-reaction current in a fresh solution (Fig. 5, blue). If the electrode is stable over the course of the reaction the peak current would be the same for both cyclic voltammetry experiments, which is largely observed in Fig. 5. From these data, we can conclude the electrode, in terms of activity, is stable over at least 30 hours. The post-reaction electrode even exhibits a higher current density than the pre-reaction electrode and the shape of the peak resembles that of the unprepared electrode (Fig. 3, black).

Changes in the post-reaction peak shape indicate alteration of electrode surface characteristics over the course of the reaction. Given earlier discussions of hydroxide and glucose adsorption, the differences in the cyclic voltammograms can be explained by acknowledging pre-measurement conditions. The pre-reaction electrode was transferred from a 0.5 M KOH solution containing no glucose, while the post-reaction electrode had just finished reacting for 30 hours in a 1.0 M NaOH and 0.1 M glucose solution. We should expect active sites on the pre-reaction electrode to be occupied by only hydroxide ions while active sites on the post-reaction electrode will contain a mixture of hydroxide ions along with glucose and subsequent degradation products. In other words, differences in species occupying the electrode active sites cause the changes in cyclic voltammetry experiments between the pre-reaction (Fig. 5, black) and post-reaction in fresh solution (Fig. 5, blue) measurements. Additionally, observed dissolution of Cu species would change the surface site density and also explains differences between voltammograms.

### Mechanism

There are two plausible mechanisms for glucose oxidation. The mechanism most often reported is oxidation driven by the parallel chemical reduction of Cu<sup>3+</sup> species.<sup>67</sup> In the alternative mechanism, oxidation is driven by the semi-conductor properties of CuO by pairing electron vacancies with hydroxide ions.<sup>69</sup>

#### Oxidation of glucose

Traditionally, there are two agreed upon and well-supported steps for the electrooxidation of glucose on a copper electrode – the first is adsorption of hydroxide ions<sup>70</sup> and the second is chemisorption of the glucose molecule.<sup>63</sup> Specifically concerning copper, Zadeii *et al.*<sup>71</sup> proposed Cu<sup>3+</sup>/Cu<sup>2+</sup> being the reduction half-reaction for glucose oxidation, and since first being proposed in 1992, the idea of Cu<sup>3+</sup>/Cu<sup>2+</sup> redox couplings being vital to glucose oxidation has seemingly reached a consensus and has been widely reported throughout literature concerning the electrooxidation of glucose on copper.<sup>23,41,42,64,72–82</sup>

Recently, Barragan *et al.*<sup>69</sup> used Raman spectroscopy to show Cu<sup>3+</sup> (actually d<sup>9</sup>L Cu<sup>2+</sup>)§§The distinctive Cu<sup>3+</sup> Raman peak for this study was based on a NaCuO<sub>2</sub> reference material. Mizokawa *et al.*<sup>62</sup> showed Cu in NaCuO<sub>2</sub> exists as d<sup>9</sup>L Cu<sup>2+</sup> rather than d<sup>8</sup> Cu<sup>3+</sup>, where d<sup>*n*</sup> denotes the number *n* of electrons in the 3d orbital of copper and L denotes an electron vacancy in oxygen. species were not detected during glucose oxidation and, concluding Cu<sup>3+</sup> species were not involved in the reaction, proposed an alternative mechanism based on the semiconductor properties of CuO.<sup>69</sup> However, lack of the distinctive Cu<sup>3+</sup> Raman peak could either indicate Cu<sup>3+</sup> is not present during the reaction or that Cu<sup>3+</sup> is a highly-reactive intermediate whose time-scale of existence is too short to be detected by Raman. The findings by Barragan *et al.* are nevertheless interesting and warrant further investigation into the mechanism of glucose degradation in an electrochemical environment.

#### Production of lactic acid

The production of lactic acid cannot be explained solely by electrochemical mechanisms. Note that the formation of lactic acid from glucose is not an oxidation or reduction – *i.e.*, electrons and average oxidation states are conserved. To explain the lactic acid yield, we revisit the thermocatalytic literature. In thermocatalytic systems, divalent cations (usually metallic) in alkaline environments produced the highest yields of lactic acid.<sup>6,18,19,35,36</sup> The general reaction pathway can be seen in Scheme 2. The alkaline environment serves to drive the isomerization towards fructose and additionally catalyzes the retro-aldol reaction of fructose to glyceraldehyde and dihydroxyacetone. Dihydroxyacetone can then undergo a dehydration reaction to form pyruvaldehyde, which undergoes hydride shifting to form lactic acid. The intermediates during hydride shifting are stabilized by divalent cations. Additionally, computational studies have shown divalent cations assist the 3 + 3 retro-aldol reaction.<sup>18</sup> It is also possible that glucose directly undergoes a 3 + 3 retro-aldol reaction.<sup>36</sup>

**Scheme 2 — Consensus mechanism for homogenous thermocatalytic conversion of glucose to lactic acid.6,18,19,34,35**

[View figure in the PMC source](https://pmc.ncbi.nlm.nih.gov/articles/PMC9041372/figure/sch2/)

We propose a similar mechanism for an electrocatalytic system (Fig. 6); however, the behavior of thermocatalytic and electrocatalytic systems are fundamentally different so some clarifications must be made. In thermocatalytic literature, the retro-aldol step is driven by the alkaline environment. In an electrocatalytic system, the retro-aldol step can additionally be catalyzed by electrooxidation and a 3 + 3 cleavage could be promoted by adsorption to the Cu<sup>2+</sup> surface or by solvated Cu<sup>2+</sup> ions (Fig. 6f–i). We note the preference of 3 + 3 cleavage is indicated by the lack of 5, 4, and 2 carbon molecules detected during HPLC analysis. Also note that in an electrochemical reaction, an oxidation of glucose yields 1,5-gluconolactone<sup>23,27,32,69</sup> (Chart 1), which would form lactic acid after a C3–C4 bond cleavage and a dehydration reaction (Fig. 6b–e).

**Fig. 6 — Possible pathway from glucose to lactic acid by an electrochemically-driven process. (a) Glucose molecule and a CuO surface, (b) glucose oxidizes to 1,5-gluconolactone, (c) 1,5-gluconolactone is stabilized by divalent metallic surface, (d) 3 + 3 cleavage occurs due to stabilization, (e) desorption from electrode surface (j) yields lactic acid after rearrangement. Alternatively, (f) glucose is stabilized by the surface, (g) 3 + 3 cleavage occurs due to stabilization, (h) dehydration reaction, (i) dissolved Cu2+ species stabilizes hydride shift akin to thermocatalytic literature and (j) yields lactic acid.**

[View figure in the PMC source](https://pmc.ncbi.nlm.nih.gov/articles/PMC9041372/figure/fig6/)

**Chart 1 — Structure of 1,5-gluconolactone, the suspected first oxidation product of glucose.**

[View figure in the PMC source](https://pmc.ncbi.nlm.nih.gov/articles/PMC9041372/figure/cht1/)

The hydride shifting is likely present in an electrocatalytic system as well, and formation of lactic acid could also be favored due to interaction with Cu<sup>2+</sup> species. However, in an electrocatalytic system, we note these intermediates could be oxidized by the electrode during shifting. Oxidation of intermediates could explain the absence of some expected intermediates as well as the high formic acid yields. Oxidation of intermediates is expected based on previous studies.<sup>72</sup>

## Conclusions

The primary objective of this study was to produce lactic acid by green electrooxidation of glucose. Lactic acid production was doubly confirmed by an external standard and spiking reaction samples with purified lactic acid. The maximum lactic acid yield was 23.3 ± 1.2%, and the maximum lactic acid selectivity was 31.1 ± 1.9%. Compared with the rate of lactic acid production by fermentation, the rate for electrochemical processes was within an order of magnitude for the conditions tested, suggesting further development of both electrocatalyst and reactor conditions could enable a competitive process.

Cyclic voltammetry studies in the presence of glucose showed high activity of the copper oxide surface towards glucose oxidation. A limiting mechanism of hydroxide adsorption was proposed based on the shape of the glucose oxidation peak for oxidized and unoxidized electrodes, which was later supported by pre-reaction and post-reaction cyclic voltammetry. Post-reaction cyclic voltammetry also revealed the electrode maintains activity after a 30 hour reaction, indicating excellent recyclability. A brief evaluation of proposed glucose oxidation mechanisms was performed and revealed a gap in mechanistic understanding. A pathway for lactic acid production from glucose in an electrocatalytic system is proposed and parallels the consensus thermocatalytic pathway.

## Conflicts of interest

There are no conflicts to declare.

## Supplementary Material

RA-011-D1RA06737K-s001

## Acknowledgements

This work was supported by the College of Engineering and the Ralph E. Martin Department of Chemical Engineering at the University of Arkansas. We thank Dr Geletu Qing for their input on the fundamentals of electrode poisoning.

## References

1. Komesu A., Rocha de Oliveira J. A., da Silva Martins L. H., Wolf Maciel M. R., Maciel Filho R.. *BioResources* 2017;12:4364–4383.

2. Ouyang J., Ma R., Zheng Z., Cal C., Zhang M., Jiang T.. *Bioresour. Technol.* 2013;135:475–480. [DOI 10.1016/j.biortech.2012.09.096](https://doi.org/10.1016/j.biortech.2012.09.096). [PMID 23127843](https://pubmed.ncbi.nlm.nih.gov/23127843/).

3. Abdel-Rahman M. A., Tashiro Y., Sonomoto K.. *J. Biotechnol.* 2011;156:286–301. [DOI 10.1016/j.jbiotec.2011.06.017](https://doi.org/10.1016/j.jbiotec.2011.06.017). [PMID 21729724](https://pubmed.ncbi.nlm.nih.gov/21729724/).

4. Wasewar K. L., Heesink A. B. M., Versteeg G. F., Pangarkar V. G.. *J. Biotechnol.* 2002;97:59–68. [DOI 10.1016/S0168-1656(02)00057-3](https://doi.org/10.1016/S0168-1656(02)00057-3). [PMID 12052683](https://pubmed.ncbi.nlm.nih.gov/12052683/).

5. Razali N., Abdullah A. Z.. *Appl. Catal., A* 2017;543:234–246. [DOI 10.1016/j.apcata.2017.07.002](https://doi.org/10.1016/j.apcata.2017.07.002).

6. Bayu A., Abudula A., Guan G.. *Fuel Process. Technol.* 2019;196:106162. [DOI 10.1016/j.fuproc.2019.106162](https://doi.org/10.1016/j.fuproc.2019.106162).

7. Rahim S., Lee C. S., Abnisa F., Aroua M. K., Daud W. A. W., Cognet P., Peres Y.. *Sci. Total Environ.* 2020;705:27. [DOI 10.1016/j.scitotenv.2019.135137](https://doi.org/10.1016/j.scitotenv.2019.135137). [PMID 31846815](https://pubmed.ncbi.nlm.nih.gov/31846815/).

8. Hama S., Mizuno S., Kihara M., Tanaka T., Ogino C., Noda H., Kondo A.. *Bioresour. Technol.* 2015;187:167–172. [DOI 10.1016/j.biortech.2015.03.106](https://doi.org/10.1016/j.biortech.2015.03.106). [PMID 25846187](https://pubmed.ncbi.nlm.nih.gov/25846187/).

9. Eom I. Y., Oh Y. H., Park S. J., Lee S. H., Yu J. H.. *Bioresour. Technol.* 2015;185:143–149. [DOI 10.1016/j.biortech.2015.02.060](https://doi.org/10.1016/j.biortech.2015.02.060). [PMID 25768416](https://pubmed.ncbi.nlm.nih.gov/25768416/).

10. Pruckler M., Lorenz C., Endo A., Kraler M., Durrschmid K., Hendriks K., da Silva F. S., Auterith E., Kneifel W., Michlmayr H.. *Food Microbiol.* 2015;49:211–219. [DOI 10.1016/j.fm.2015.02.014](https://doi.org/10.1016/j.fm.2015.02.014). [PMID 25846933](https://pubmed.ncbi.nlm.nih.gov/25846933/).

11. Hu J. L., Zhang Z. T., Lin Y. X., Zhao S. M., Mei Y. X., Liang Y. X., Peng N.. *Bioresour. Technol.* 2015;182:251–257. [DOI 10.1016/j.biortech.2015.02.008](https://doi.org/10.1016/j.biortech.2015.02.008). [PMID 25704098](https://pubmed.ncbi.nlm.nih.gov/25704098/).

12. Nakano S., Ugwu C. U., Tokiwa Y.. *Bioresour. Technol.* 2012;104:791–794. [DOI 10.1016/j.biortech.2011.10.017](https://doi.org/10.1016/j.biortech.2011.10.017). [PMID 22093977](https://pubmed.ncbi.nlm.nih.gov/22093977/).

13. Datta R., Henry M.. *J. Chem. Technol. Biotechnol.* 2006;81:1119–1129. [DOI 10.1002/jctb.1486](https://doi.org/10.1002/jctb.1486).

14. Onda A., Ochi T., Yanagisawa K.. *Green Chem.* 2008;10:1033–1037. [DOI 10.1039/B808471H](https://doi.org/10.1039/B808471H).

15. Huang Y.-B., Fu Y.. *Green Chem.* 2013;15:1095–1111. [DOI 10.1039/C3GC40136G](https://doi.org/10.1039/C3GC40136G).

16. Shrotri A., Kobayashi H., Fukuoka A.. *Acc. Chem. Res.* 2018;51:761–768. [DOI 10.1021/acs.accounts.7b00614](https://doi.org/10.1021/acs.accounts.7b00614). [PMID 29443505](https://pubmed.ncbi.nlm.nih.gov/29443505/).

17. Choudhary H., Nishimura S., Ebitani K.. *Appl. Catal., B* 2015;162:1–10. [DOI 10.1016/j.apcatb.2014.05.012](https://doi.org/10.1016/j.apcatb.2014.05.012).

18. Deng W. P., Wang P., Wang B. J., Wang Y. L., Yan L. F., Li Y. Y., Zhang Q. H., Cao Z. X., Wang Y.. *Green Chem.* 2018;20:735–744. [DOI 10.1039/C7GC02975F](https://doi.org/10.1039/C7GC02975F).

19. Li L., Shen F., Smith R., Qi X.. *Green Chem.* 2017;19:76–81. [DOI 10.1039/C6GC02443B](https://doi.org/10.1039/C6GC02443B).

20. Schafer A., Heywood J. B., Weiss M. A.. *Energy* 2006;31:2064–2087. [DOI 10.1016/j.energy.2005.09.011](https://doi.org/10.1016/j.energy.2005.09.011).

21. Lam C. H., Bloomfield A. J., Anastas P. T.. *Green Chem.* 2017;19:1958–1968. [DOI 10.1039/C7GC00371D](https://doi.org/10.1039/C7GC00371D).

22. Dai C. C., Sun L. B., Liao H. B., Khezri B., Webster R. D., Fisher A. C., Xu Z. C. J.. *J. Catal.* 2017;356:14–21. [DOI 10.1016/j.jcat.2017.10.010](https://doi.org/10.1016/j.jcat.2017.10.010).

23. Toghill K. E., Compton R. G.. *Int. J. Electrochem. Sci.* 2010;5:1246–1301.

24. Bin D. S., Wang H., Li J. X., Yin Z., Kang J. L., He B. Q., Li Z. H.. *Electrochim. Acta* 2014;130:170–178. [DOI 10.1016/j.electacta.2014.02.128](https://doi.org/10.1016/j.electacta.2014.02.128).

25. Lee J., Saha B., Vlachos D. G.. *Green Chem.* 2016;18:3815–3822. [DOI 10.1039/C6GC00460A](https://doi.org/10.1039/C6GC00460A).

26. Ibert M., Fuertes P., Merbouh N., Fiol-Petit C., Feasson C., Marsais F.. *Electrochim. Acta* 2010;55:3589–3594. [DOI 10.1016/j.electacta.2009.11.041](https://doi.org/10.1016/j.electacta.2009.11.041).

27. Liu W. J., Xu Z. R., Zhao D. T., Pan X. Q., Li H. C., Hu X., Fan Z. Y., Wang W. K., Zhao G. H., Jin S., Huber G. W., Yu H. Q.. *Nat. Commun.* 2020;11:11. [DOI 10.1038/s41467-019-13872-1](https://doi.org/10.1038/s41467-019-13872-1). [PMID 31937783](https://pubmed.ncbi.nlm.nih.gov/31937783/).

28. Moggia G., Kenis T., Daems N., Breugelmans T.. *ChemElectroChem* 2020;7:86–95. [DOI 10.1002/celc.201901592](https://doi.org/10.1002/celc.201901592).

29. Vedovato V., Vanbroekhoven K., Pant D., Helsen J.. *Molecules* 2020;25:37. [DOI 10.3390/molecules25163712](https://doi.org/10.3390/molecules25163712). [PMID 32823995](https://pubmed.ncbi.nlm.nih.gov/32823995/).

30. Holade Y., Servat K., Napporn T. W., Morais C., Berjeaud J. M., Kokoh K. B.. *ChemSusChem* 2016;9:252–263. [DOI 10.1002/cssc.201501593](https://doi.org/10.1002/cssc.201501593). [PMID 26777210](https://pubmed.ncbi.nlm.nih.gov/26777210/).

31. Kokoh K., Léger J.-M., Beden B., Huser H., Lamy C.. *Electrochim. Acta* 1992;37:1909–1918. [DOI 10.1016/0013-4686(92)87102-6](https://doi.org/10.1016/0013-4686(92)87102-6).

32. Beden B., Largeaud F., Kokoh K. B., Lamy C.. *Electrochim. Acta* 1996;41:701–709. [DOI 10.1016/0013-4686(95)00359-2](https://doi.org/10.1016/0013-4686(95)00359-2).

33. Giri S., Sarkar A.. *J. Electrochem. Soc.* 2016;163:I1252–I1259. [DOI 10.1149/2.0071605jes](https://doi.org/10.1149/2.0071605jes).

34. Anantharaj S., Sugime H., Noda S.. *ACS Appl. Mater. Interfaces* 2020;12:27327–27338. [DOI 10.1021/acsami.0c08979](https://doi.org/10.1021/acsami.0c08979). [PMID 32459085](https://pubmed.ncbi.nlm.nih.gov/32459085/).

35. Marianou A., Michailof C., Pineda A., Iliopoulou E., Triantafyllidis K., Lappas A.. *Appl. Catal., A* 2018;555:75–87. [DOI 10.1016/j.apcata.2018.01.029](https://doi.org/10.1016/j.apcata.2018.01.029).

36. Huo Z., Fang Y., Ren D., Zhang S., Yao G., Zeng X., Jin F.. *ACS Sustainable Chem. Eng.* 2014;2:2765–2771. [DOI 10.1021/sc500507b](https://doi.org/10.1021/sc500507b).

37. Wang Y. Q., Jin F. M., Sasaki M., Wahyudiono, Wang F. W., Jing Z. Z., Goto M.. *AIChE J.* 2013;59:2096–2104. [DOI 10.1002/aic.13960](https://doi.org/10.1002/aic.13960).

38. MoulderJ. F. and ChastainJ., Handbook of X-ray Photoelectron Spectroscopy: A Reference Book of Standard Spectra for Identification and Interpretation of XPS Data, Physical Electronics Division, PerkinElmer Corporation, 1992

39. Wang Q., Wang Q., Li M., Szunerits S., Boukherroub R.. *RSC Adv.* 2015;5:15861–15869. [DOI 10.1039/C4RA14132F](https://doi.org/10.1039/C4RA14132F).

40. Tahir D., Tougaard S.. *J. Phys.: Condens. Matter* 2012;24:175002. [DOI 10.1088/0953-8984/24/17/175002](https://doi.org/10.1088/0953-8984/24/17/175002). [PMID 22475683](https://pubmed.ncbi.nlm.nih.gov/22475683/).

41. Maaoui H., Teodoresu F., Wang Q., Pan G.-H., Addad A., Chtourou R., Szunerits S., Boukherroub R.. *Sensors* 2016;16:1720. [DOI 10.3390/s16101720](https://doi.org/10.3390/s16101720). [PMID 27763533](https://pubmed.ncbi.nlm.nih.gov/27763533/).

42. Maaoui H., Singh S. K., Teodorescu F., Coffinier Y., Barras A., Chtourou R., Kurungot S., Szunerits S., Boukherroub R.. *Electrochim. Acta* 2017;224:346–354. [DOI 10.1016/j.electacta.2016.12.078](https://doi.org/10.1016/j.electacta.2016.12.078).

43. Akhavan O., Azimirad R., Safa S., Hasani E.. *J. Mater. Chem.* 2011;21:9634–9640. [DOI 10.1039/C0JM04364H](https://doi.org/10.1039/C0JM04364H).

44. Akhavan O.. *J. Phys. D: Appl. Phys.* 2008;41:235407. [DOI 10.1088/0022-3727/41/23/235407](https://doi.org/10.1088/0022-3727/41/23/235407).

45. Katerski A., Mere A., Kazlauskiene V., Miskinis J., Saar A., Matisen L., Kikas A., Krunks M.. *Thin Solid Films* 2008;516:7110–7115. [DOI 10.1016/j.tsf.2007.12.027](https://doi.org/10.1016/j.tsf.2007.12.027).

46. Elgrishi N., Rountree K. J., McCarthy B. D., Rountree E. S., Eisenhart T. T., Dempsey J. L.. *J. Chem. Educ.* 2018;95:197–206. [DOI 10.1021/acs.jchemed.7b00361](https://doi.org/10.1021/acs.jchemed.7b00361).

47. El Din A. M. S., El Wahab F. M. A.. *Electrochim. Acta* 1964;9:113–121. [DOI 10.1016/0013-4686(64)80010-4](https://doi.org/10.1016/0013-4686(64)80010-4).

48. Dignam M. J., Gibbs D. B.. *Can. J. Chem.* 1970;48:1242–1250. [DOI 10.1139/v70-205](https://doi.org/10.1139/v70-205).

49. Hampson N. A., Lee J. B., Macdonald K. I.. *J. Electroanal. Chem. Interfacial Electrochem.* 1971;32:165–173. [DOI 10.1016/S0022-0728(71)80183-3](https://doi.org/10.1016/S0022-0728(71)80183-3).

50. Elhaleem S. M. A., Ateya B. G.. *J. Electroanal. Chem.* 1981;117:309–319. [DOI 10.1016/S0022-0728(81)80091-5](https://doi.org/10.1016/S0022-0728(81)80091-5).

51. Miller B.. *J. Electrochem. Soc.* 1969;116:1675. [DOI 10.1149/1.2411657](https://doi.org/10.1149/1.2411657).

52. Ambrose J., Shoesmit D.. *J. Electroanal. Chem.* 1973;47:47–64. [DOI 10.1016/S0022-0728(73)80344-4](https://doi.org/10.1016/S0022-0728(73)80344-4).

53. Xia L. P., Liu L., Deng N., Zhu Y. W., He J. B.. *Microchim. Acta* 2015;182:1289–1295. [DOI 10.1007/s00604-015-1447-2](https://doi.org/10.1007/s00604-015-1447-2).

54. Lister M. W.. *Can. J. Chem.* 1953;31:638–652. [DOI 10.1139/v53-087](https://doi.org/10.1139/v53-087).

55. DiMucci I. M., Lukens J. T., Chatterjee S., Carsch K. M., Titus C. J., Lee S. J., Nordlund D., Betley T. A., MacMillan S. N., Lancaster K. M.. *J. Am. Chem. Soc.* 2019;141:18508–18520. [DOI 10.1021/jacs.9b09016](https://doi.org/10.1021/jacs.9b09016). [PMID 31710466](https://pubmed.ncbi.nlm.nih.gov/31710466/).

56. Burdett J. K., Sevov S.. *J. Am. Chem. Soc.* 1995;117:12788–12792. [DOI 10.1021/ja00156a016](https://doi.org/10.1021/ja00156a016).

57. Choy J. H., Kim D. K., Hwang S. H., Park J. C.. *J. Am. Chem. Soc.* 1995;117:7556–7557. [DOI 10.1021/ja00133a034](https://doi.org/10.1021/ja00133a034).

58. Deng Y., Handoko A. D., Du Y., Xi S., Yeo B. S.. *ACS Catal.* 2016;6:2473–2481. [DOI 10.1021/acscatal.6b00205](https://doi.org/10.1021/acscatal.6b00205).

59. Naumann D., Roy T., Tebbe K. F., Crump W.. *Angew. Chem., Int. Ed. Engl.* 1993;32:1482–1483. [DOI 10.1002/anie.199314821](https://doi.org/10.1002/anie.199314821).

60. Maurya Y. K., Noda K., Yamasumi K., Mori S., Uchiyama T., Kamitani K., Hirai T., Ninomiya K., Nishibori M., Hori Y., Shiota Y., Yoshizawa K., Ishida M., Furuta H.. *J. Am. Chem. Soc.* 2018;140:6883–6892. [DOI 10.1021/jacs.8b01876](https://doi.org/10.1021/jacs.8b01876). [PMID 29749234](https://pubmed.ncbi.nlm.nih.gov/29749234/).

61. Yao B., Wang D. X., Huang Z. T., Wang M. X.. *Chem. Commun.* 2009:2899–2901. [DOI 10.1039/B902946J](https://doi.org/10.1039/B902946J). [PMID 19436903](https://pubmed.ncbi.nlm.nih.gov/19436903/).

62. Mizokawa T., Fujimori A., Namatame H., Akeyama K., Kosugi N.. *Phys. Rev. B: Condens. Matter Mater. Phys.* 1994;49:7193. [DOI 10.1103/PhysRevB.49.7193](https://doi.org/10.1103/PhysRevB.49.7193). [PMID 10009456](https://pubmed.ncbi.nlm.nih.gov/10009456/).

63. Pletcher D.. *J. Appl. Electrochem.* 1984;14:403–415. [DOI 10.1007/BF00610805](https://doi.org/10.1007/BF00610805).

64. Xie Y., Huber C. O.. *Anal. Chem.* 1991;63:1714–1719. [DOI 10.1021/ac00017a012](https://doi.org/10.1021/ac00017a012).

65. Marianou A. A., Michailof C. M., Pineda A., Iliopoulou E. F., Triantafyllidis K. S., Lappas A. A.. *ChemCatChem* 2016;8:1100–1110. [DOI 10.1002/cctc.201501203](https://doi.org/10.1002/cctc.201501203).

66. Bagger A., Aran-Ais R. M., Stenlid J. H., dos Santos E. C., Arnarson L., Jensen K. D., Escudero-Escribano M., Cuanya B. R., Rossmeisl J.. *ChemPhysChem* 2019;20:3096–3105. [DOI 10.1002/cphc.201900509](https://doi.org/10.1002/cphc.201900509). [PMID 31430013](https://pubmed.ncbi.nlm.nih.gov/31430013/).

67. Marioli J. M., Kuwana T.. *Electrochim. Acta* 1992;37:1187–1197. [DOI 10.1016/0013-4686(92)85055-P](https://doi.org/10.1016/0013-4686(92)85055-P).

68. Bai D.-M., Wei Q., Yan Z.-H., Zhao X.-M., Li X.-G., Xu S.-M.. *Biotechnol. Lett.* 2003;25:1833–1835. [DOI 10.1023/A:1026276925649](https://doi.org/10.1023/A:1026276925649). [PMID 14677707](https://pubmed.ncbi.nlm.nih.gov/14677707/).

69. Barragan J. T. C., Kogikoski S., da Silva E., Kubota L. T.. *Anal. Chem.* 2018;90:3357–3365. [DOI 10.1021/acs.analchem.7b04963](https://doi.org/10.1021/acs.analchem.7b04963). [PMID 29424228](https://pubmed.ncbi.nlm.nih.gov/29424228/).

70. Burke L. D.. *Electrochim. Acta* 1994;39:1841–1848. [DOI 10.1016/0013-4686(94)85173-5](https://doi.org/10.1016/0013-4686(94)85173-5).

71. Zadeii J. M., Marioli J., Kuwana T.. *Anal. Chem.* 1991;63:649–653. [DOI 10.1021/ac00006a019](https://doi.org/10.1021/ac00006a019).

72. Kano K., Torimura M., Esaka Y., Goto M., Ueda T.. *J. Electroanal. Chem.* 1994;372:137–143. [DOI 10.1016/0022-0728(93)03252-K](https://doi.org/10.1016/0022-0728(93)03252-K).

73. Zheng W. R., Li Y., Tsang C. S., Hu L. S., Liu M. J., Huang B. L., Lee L. Y. S., Wong K. Y.. *ChemElectroChem* 2017;4:2788–2792. [DOI 10.1002/celc.201700712](https://doi.org/10.1002/celc.201700712).

74. Xu Q., Zhao Y., Xu J. Z., Zhu J. J.. *Sens. Actuators, B* 2006;114:379–386. [DOI 10.1016/j.snb.2005.06.005](https://doi.org/10.1016/j.snb.2005.06.005).

75. Wei H., Sun J.-J., Guo L., Li X., Chen G.-N.. *Chem. Commun.* 2009:2842–2844. [DOI 10.1039/B904673A](https://doi.org/10.1039/B904673A). [PMID 19436884](https://pubmed.ncbi.nlm.nih.gov/19436884/).

76. Yang J., Lin Q., Yin W., Jiang T., Zhao D., Jiang L.. *Sens. Actuators, B* 2017;253:1087–1095. [DOI 10.1016/j.snb.2017.07.008](https://doi.org/10.1016/j.snb.2017.07.008).

77. Wu C.-H., Onno E., Lin C.-Y.. *Electrochim. Acta* 2017;229:129–140. [DOI 10.1016/j.electacta.2017.01.130](https://doi.org/10.1016/j.electacta.2017.01.130).

78. Molazemhosseini A., Magagnin L., Vena P., Liu C.-C.. *J. Electroanal. Chem.* 2017;789:50–57. [DOI 10.1016/j.jelechem.2017.01.041](https://doi.org/10.1016/j.jelechem.2017.01.041).

79. Sun S. D., Zhang X. Z., Sun Y. X., Yang S. C., Song X. P., Yang Z. M.. *ACS Appl. Mater. Interfaces* 2013;5:4429–4437. [DOI 10.1021/am400858j](https://doi.org/10.1021/am400858j). [PMID 23629486](https://pubmed.ncbi.nlm.nih.gov/23629486/).

80. Si P., Huang Y. J., Wang T. H., Ma J. M.. *RSC Adv.* 2013;3:3487–3502. [DOI 10.1039/C2RA22360K](https://doi.org/10.1039/C2RA22360K).

81. Hou L., Zhao H., Bi S., Xu Y., Lu Y.. *Electrochim. Acta* 2017;248:281–291. [DOI 10.1016/j.electacta.2017.07.142](https://doi.org/10.1016/j.electacta.2017.07.142).

82. Song J., Xu L., Zhou C., Xing R., Dai Q., Liu D., Song H.. *ACS Appl. Mater. Interfaces* 2013;5:12928–12934. [DOI 10.1021/am403508f](https://doi.org/10.1021/am403508f). [PMID 24182328](https://pubmed.ncbi.nlm.nih.gov/24182328/).
