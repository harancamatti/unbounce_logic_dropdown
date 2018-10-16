   jQuery('#especialidades').append(new Option("Selecione sua especialidade...","","","true"))
   //Médico(a)
   if (jQuery('#profissoes').val()=="Médico(a)") {
      jQuery('#especialidades').append(new Option("Anestesia","Anestesia"))
      jQuery('#especialidades').append(new Option("Cardiologia","Cardiologia"))
      jQuery('#especialidades').append(new Option("Cirurgia","Cirurgia"))
      jQuery('#especialidades').append(new Option("Clínica Médica","Clínica Médica"))
      jQuery('#especialidades').append(new Option("Emergência Pediátrica","Emergência Pediátrica"))
      jQuery('#especialidades').append(new Option("Endocrinologia e Metabologia","Endocrinologia e Metabologia"))
      jQuery('#especialidades').append(new Option("Geriatria e Gerontologia","Geriatria e Gerontologia"))
      jQuery('#especialidades').append(new Option("Ginecologia e Obstetrícia","Ginecologia e Obstetrícia"))
      jQuery('#especialidades').append(new Option("Intensiva Pediátrica","Intensiva Pediátrica"))
      jQuery('#especialidades').append(new Option("Medicina de Emergência","Medicina de Emergência"))
      jQuery('#especialidades').append(new Option("Medicina de Família e Comunidade","Medicina de Família e Comunidade"))
      jQuery('#especialidades').append(new Option("Medicina do Trabalho","Medicina do Trabalho"))
      jQuery('#especialidades').append(new Option("Medicina Intensiva","Medicina Intensiva"))
      jQuery('#especialidades').append(new Option("Neonatologia","Neonatologia"))
      jQuery('#especialidades').append(new Option("Oftalmologia","Oftalmologia"))
      jQuery('#especialidades').append(new Option("Oncologia","Oncologia"))
      jQuery('#especialidades').append(new Option("Otorrinolaringologia","Otorrinolaringologia"))
      jQuery('#especialidades').append(new Option("Psiquiatria","Psiquiatria"))
      jQuery('#especialidades').append(new Option("Radiologia e Diagnóstico por Imagem","Radiologia e Diagnóstico por Imagem"))
      jQuery('#especialidades').append(new Option("Terapêutica","Terapêutica"))
      jQuery('#especialidades').append(new Option("Terapêutica Pediátrica","Terapêutica Pediátrica"))
      jQuery('#especialidades').append(new Option("Traumatologia e Ortopedia","Traumatologia e Ortopedia"))
      jQuery('#especialidades').append(new Option("Urgência e Emergência","Urgência e Emergência"))
   }
   //Enfermeiro(a)
   if (jQuery('#profissoes').val()=="Enfermeiro(a)") {
      jQuery('#especialidades').append(new Option("Atenção Primária a Saúde da Família","Atenção Primária a Saúde da Família"))
      jQuery('#especialidades').append(new Option("Diagnósticos de Enfermagem","Diagnósticos de Enfermagem"))
      jQuery('#especialidades').append(new Option("Geriatria","Geriatria"))
      jQuery('#especialidades').append(new Option("Gestão de Enfermagem","Gestão de Enfermagem"))
      jQuery('#especialidades').append(new Option("Saúde da Criança e Adolescente","Saúde da Criança e Adolescente"))
      jQuery('#especialidades').append(new Option("Saúde do Adulto","Saúde do Adulto"))
      jQuery('#especialidades').append(new Option("Saúde Materna e Neonatal","Saúde Materna e Neonatal"))
      jQuery('#especialidades').append(new Option("Terapia Intensiva","Terapia Intensiva"))
      jQuery('#especialidades').append(new Option("Urgência e Emergência","Urgência e Emergência"))
   }
   //Fisioterapeuta
   if (jQuery('#profissoes').val()=="Fisioterapeuta") {
      jQuery('#especialidades').append(new Option("Cardiovascular e Respiratória","Cardiovascular e Respiratória"))
      jQuery('#especialidades').append(new Option("Esportiva e atividade física","Esportiva e atividade física"))
      jQuery('#especialidades').append(new Option("Neurofuncional","Neurofuncional"))
      jQuery('#especialidades').append(new Option("Pediátrica e Neonatal: Cardiorrespiratória e Terapia Intensiva","Pediátrica e Neonatal: Cardiorrespiratória e Terapia Intensiva"))
      jQuery('#especialidades').append(new Option("Terapia Intensiva Adulto","Terapia Intensiva Adulto"))
      jQuery('#especialidades').append(new Option("Traumato Ortopédica","Traumato Ortopédica"))
   }
   //Psicólogo(a)
   if (jQuery('#profissoes').val()=="Psicólogo(a)") {
      jQuery('#especialidades').append(new Option("Psicologia Clínica","Psicologia Clínica"))
      jQuery('#especialidades').append(new Option("Terapias Cognitivas","Terapias Cognitivas"))
   }
   //Técnico(a)
   if (jQuery('#profissoes').val()=="Técnico(a)") {
      jQuery('#especialidades').append(new Option("Técnicos de Enfermagem","Técnicos de Enfermagem"))
      jQuery('#especialidades').append(new Option("Técnicos de Radiologia","Técnicos de Radiologia"))
   }
   //Veterinário(a)
   if (jQuery('#profissoes').val()=="Veterinário(a)") {
      jQuery('#especialidades').append(new Option("Pequenos Animais","Pequenos Animais"))
   }
   //Educador(a) Físico(a)
   if (jQuery('#profissoes').val()=="Educador(a) Físico(a)") {
      jQuery('#especialidades').append(new Option("Educação Física","Educação Física"))
   }
   //Farmacêutico(a)
   if (jQuery('#profissoes').val()=="Farmacêutico(a)") {
      jQuery('#especialidades').append(new Option("Farmácia","Farmácia"))
   }
   //Outros(as)
   if (jQuery('#profissoes').val()=="") {
      jQuery('#especialidades').append(new Option("Outros(as)","Outros(as)"))
   }

