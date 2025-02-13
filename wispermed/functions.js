function custom_func_b0dbe029c96fe1e10225c2afa8ba3435(value) { try { 
  const trueLabel = '<span style="display: inline-block; margin: 1px; width: 2em; height: 2em; line-height: 2em; font-size: 1em; font-weight: bold; color: white; background-color: rgb(31, 119, 180); border-radius: 0.4em; text-align: center;">+</span>';
  const falseLabel = '<span style="display: inline-block; margin: 1px; width: 2em; height: 2em; line-height: 2em; font-size: 1em; font-weight: bold; color: white; background-color: rgb(214, 39, 40); border-radius: 0.4em; text-align: center;">-</span>';
  if (value === "Ja") {
      return trueLabel;
  } else if (value === "Nein") {
      return falseLabel;
  } else {
      return value;
  }
 } catch (e) { datavzrd.custom_error(e, 'Klinische Studie (Ja/Nein)') }}
function custom_func_6c7776a30d2dd6f14eb71298f1f5de1b(value) { try { 
    const match = value.match(/(.+?)\s*\(h-index:\s*(\d+)\)/);
    if (!match) return value; // Falls das Format nicht passt, gib den ursprünglichen Wert zurück

    const name = match[1];
    const hIndex = match[2];

    // Farbe je nach h-Index (Grün für hoch, Rot für niedrig)
    let bgColor;
    if (hIndex >= 50) {
        bgColor = "#008000"; // Dunkelgrün für Top-Forscher
    } else if (hIndex >= 30) {
        bgColor = "#32a852"; // Grün für etablierte Forscher
    } else if (hIndex >= 15) {
        bgColor = "#d4d23a"; // Gelb für mittlere Level
    } else {
        bgColor = "#e34b2e"; // Rot für niedrige h-Index-Werte
    }
    
    return name;

    return `
        <span>${name}</span>
        <span style="
            display: inline-block;
            background-color: ${bgColor};
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.9em;
            margin-left: 8px;
        ">${hIndex}</span>
    `;
 } catch (e) { datavzrd.custom_error(e, 'First Author (Name + h-index)') }}
function custom_func_40d47c2270da6660e63f07044b53ec9e(value) { try { 
    return `<p style="white-space: pre-wrap; width: 200px; line-height: 1.5;">${value}</p>`;
 } catch (e) { datavzrd.custom_error(e, 'Präregistriert (ClinicalTrials.gov?)') }}
function custom_func_40d47c2270da6660e63f07044b53ec9e(value) { try { 
    return `<p style="white-space: pre-wrap; width: 200px; line-height: 1.5;">${value}</p>`;
 } catch (e) { datavzrd.custom_error(e, 'Tumor Entität (im Paper)') }}
function custom_func_40d47c2270da6660e63f07044b53ec9e(value) { try { 
    return `<p style="white-space: pre-wrap; width: 200px; line-height: 1.5;">${value}</p>`;
 } catch (e) { datavzrd.custom_error(e, 'Studien Comparison') }}
function custom_func_6c7776a30d2dd6f14eb71298f1f5de1b(value) { try { 
    const match = value.match(/(.+?)\s*\(h-index:\s*(\d+)\)/);
    if (!match) return value; // Falls das Format nicht passt, gib den ursprünglichen Wert zurück

    const name = match[1];
    const hIndex = match[2];

    // Farbe je nach h-Index (Grün für hoch, Rot für niedrig)
    let bgColor;
    if (hIndex >= 50) {
        bgColor = "#008000"; // Dunkelgrün für Top-Forscher
    } else if (hIndex >= 30) {
        bgColor = "#32a852"; // Grün für etablierte Forscher
    } else if (hIndex >= 15) {
        bgColor = "#d4d23a"; // Gelb für mittlere Level
    } else {
        bgColor = "#e34b2e"; // Rot für niedrige h-Index-Werte
    }
    
    return name;

    return `
        <span>${name}</span>
        <span style="
            display: inline-block;
            background-color: ${bgColor};
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.9em;
            margin-left: 8px;
        ">${hIndex}</span>
    `;
 } catch (e) { datavzrd.custom_error(e, 'Last Author (Name + h-index)') }}
function custom_func_5104aff66095d803905934e19ab48064(value) { try { 
    return `<p style="white-space: pre-wrap; max-width: 50vw; line-height: 1.5;">${value}</p>`;
 } catch (e) { datavzrd.custom_error(e, 'Abstract') }}
function custom_func_40d47c2270da6660e63f07044b53ec9e(value) { try { 
    return `<p style="white-space: pre-wrap; width: 200px; line-height: 1.5;">${value}</p>`;
 } catch (e) { datavzrd.custom_error(e, 'Autoren') }}
function custom_func_1276c91c4e6dede9cdd6a2c63b649824(value) { try { 
  const trueLabel = '<span style="display: inline-block; margin: 1px; width: 2em; height: 2em; line-height: 2em; font-size: 1em; font-weight: bold; color: white; background-color: rgb(31, 119, 180); border-radius: 0.4em; text-align: center;">+</span>';
  const falseLabel = '<span style="display: inline-block; margin: 1px; width: 2em; height: 2em; line-height: 2em; font-size: 1em; font-weight: bold; color: white; background-color: rgb(214, 39, 40); border-radius: 0.4em; text-align: center;">-</span>';
  if (value === "J") {
      return trueLabel;
  } else if (value === "N") {
      return falseLabel;
  } else {
      return value;
  }
 } catch (e) { datavzrd.custom_error(e, 'Wurde die Studie im Paper mal in einer Guideline erwähnt? (J/N)') }}
function custom_func_b0dbe029c96fe1e10225c2afa8ba3435(value) { try { 
  const trueLabel = '<span style="display: inline-block; margin: 1px; width: 2em; height: 2em; line-height: 2em; font-size: 1em; font-weight: bold; color: white; background-color: rgb(31, 119, 180); border-radius: 0.4em; text-align: center;">+</span>';
  const falseLabel = '<span style="display: inline-block; margin: 1px; width: 2em; height: 2em; line-height: 2em; font-size: 1em; font-weight: bold; color: white; background-color: rgb(214, 39, 40); border-radius: 0.4em; text-align: center;">-</span>';
  if (value === "Ja") {
      return trueLabel;
  } else if (value === "Nein") {
      return falseLabel;
  } else {
      return value;
  }
 } catch (e) { datavzrd.custom_error(e, 'Open Data? (Ja/Nein)') }}
function custom_func_40d47c2270da6660e63f07044b53ec9e(value) { try { 
    return `<p style="white-space: pre-wrap; width: 200px; line-height: 1.5;">${value}</p>`;
 } catch (e) { datavzrd.custom_error(e, 'Methodische Qualität') }}
function custom_func_65340dd852998d1c2b1946611b346347(value) { try { 
    return `<span data-toggle="tooltip" title="The Oxford Levels of Evidence is a hierarchical system that ranks research studies based on their methodological quality and reliability. It classifies evidence from Level 1 (which includes high-quality randomized controlled trials and systematic reviews) down to Level 5 (which consists of expert opinions and case reports). Rather than using a mathematical formula, the calculation involves evaluating a study's design, execution, consistency, and directness to determine its appropriate level in the hierarchy.">${value}</span>`;
 } catch (e) { datavzrd.custom_error(e, 'Oxford Evidenzlevel') }}
function custom_func_40d47c2270da6660e63f07044b53ec9e(value) { try { 
    return `<p style="white-space: pre-wrap; width: 200px; line-height: 1.5;">${value}</p>`;
 } catch (e) { datavzrd.custom_error(e, 'Metaanalyse? (Ja/Nein)') }}
function custom_func_40d47c2270da6660e63f07044b53ec9e(value) { try { 
    return `<p style="white-space: pre-wrap; width: 200px; line-height: 1.5;">${value}</p>`;
 } catch (e) { datavzrd.custom_error(e, 'Studiendesign/Studienart') }}
function custom_func_49004fb0ceae291d236987ba0866b418(value, row) { try { 
    // Generate data for this cell, having access to the value and any other values from the same row.
    let values = value.split(',').map(Number);
    return values.map((citations, index) => ({
        year: 2019 + index, // Assuming years start from 2000
        citations: citations
    }));
 } catch (e) { datavzrd.custom_error(e, 'Citation Trend (Last Years)') }}
