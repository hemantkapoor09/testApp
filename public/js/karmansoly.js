function test()
{
  window.location.reload();
} 

function prt(){
  // ele=document.getElementById('MainPage')
  window.print();
}


// --- Trick --- --- Trick ---  --- Trick ---  --- Trick ---  --- Trick ---  --- Trick ---  
function getMf()
{
  cut = new Array;
  for (an of $('[id="cc"]'))  
  {
    var tempp;
    tempp=an.value;
    cut.push(tempp);
  }

 jMd(cut);
}

function jMd(cut)
{
// Magical-Jugar Magical-Jugar Magical-Jugar Magical-Jugar Magical-Jugar Magical-Jugar Magical-Jugar

  mf= new Array;
  lenth=cut.length;
   for(i=0;i<lenth;i++)
   {
      if(cut[i]>0)
      {
        mf.push(cut[i]);
      }
      else
      {
      mf.push(1);
      }
   }
  // --Art--  --Art--  --Art--  --Art--  --Art--  --Art--  --Art--  --Art-- 
  ano = new Array;
  for (artn of $('[id="art_no"]')) 
    {
      temp = artn.innerHTML;
      ano.push(temp);
    }  
  len = $('[id="art_no"]').length;

  magic_Str=new String;
  magic_Str="<center>Articals Included</center><br>";
  for(i=0;i<len;i++)
  {
    magic_Str=magic_Str+"<b><u>  "+ano[i]+"              X "+mf[i]+" </u></b><br>";
  }
  document.getElementById("mgck").innerHTML=magic_Str;
funZip();
funRuner();
th();
blt();
hh();
cap();
stud();
washer();
pipe();
bkl();
rvt();
frame();
lthr();
tich();
greenLine();
jHook();
dgHook();
tChain();
ilet();
welcrro();
}  //jMd Main

// --- welcro --- --- welcro ---  --- welcro ---  --- welcro ---  --- welcro ---  
function welcrro()
{
  welL = new Array;
  welH = new Array;
  welSze = new Array;
  welColr= new Array;

var bLwel_34=0,bLwel_1=0,bLwel_1_14=0,bLwel_1_12=0,bLwel_2=0,bLwel_3=0;
var bHwel_34=0,bHwel_1=0,bHwel_1_14=0,bHwel_1_12=0,bHwel_2=0,bHwel_3=0;

var gLwel_34=0,gLwel_1=0,gLwel_1_14=0,gLwel_1_12=0,gLwel_2=0,gLwel_3=0;
var gHwel_34=0,gHwel_1=0,gHwel_1_14=0,gHwel_1_12=0,gHwel_2=0,gHwel_3=0;

  Wlen = $('[id="wL_q"]').length;
    
    for (wL of $('[id="wL_q"]')) 
    {
      temp = wL.innerHTML;
      welL.push(temp);
    }  
          
    for (wH of $('[id="wH_q"]')) 
    {
      temp = wH.innerHTML;
      welH.push(temp);
    }  
        
    for (wC of $('[id="wellcro_clr"]')) 
    {
      temp = wC.innerHTML;
      welColr.push(temp);
    }          

    for (wS of $('[id="wellcro_typ"]')) 
    {
      temp = wS.innerHTML;
      welSze.push(temp);
    }  
    

    for(i=0;i<Wlen;i++)
    {
      //  --3\4--    --3\4--    --3\4--    --3\4--    --3\4--    --3\4--  
      if(welSze[i]=="(3/4)' ")
      {
          if(welColr[i]=="black")
          {
            bLwel_34= +bLwel_34 + ((+welL[i])*mf[i]);
            bHwel_34= +bHwel_34 + ((+welH[i])*mf[i]);
          }
          
          if(welColr[i]=="golden")
          {
            gLwel_34= +gLwel_34 + ((+welL[i])*mf[i]);
            gHwel_34= +gHwel_34 + ((+welH[i])*mf[i]);
          }
      }

      //  --1--    --1--    --1--    --1--    --1--    --1--    --1--  
      if(welSze[i]=="1' ")
      {
          if(welColr[i]=="black")
          {
            bLwel_1= +bLwel_1 + ((+welL[i])*mf[i]);
            bHwel_1= +bHwel_1 + ((+welH[i])*mf[i]);
          }
          
          if(welColr[i]=="golden")
          {
            gLwel_1= +gLwel_1 + ((+welL[i])*mf[i]);
            gHwel_1= +gHwel_1 + ((+welH[i])*mf[i]);
          }
      }

      //  -- 1(1\4) --    -- 1(1\4) --    -- 1(1\4) --    -- 1(1\4) --  
      if(welSze[i]=="1 (1/4)' ")
      {
          if(welColr[i]=="black")
          {
            bLwel_1_14= +bLwel_1_14 + ((+welL[i])*mf[i]);
            bHwel_1_14= +bHwel_1_14 + ((+welH[i])*mf[i]);
          }
          
          if(welColr[i]=="golden")
          {
            gLwel_1_14= +gLwel_1_14 + ((+welL[i])*mf[i]);
            gHwel_1_14= +gHwel_1_14 + ((+welH[i])*mf[i]);
          }
      }

      //  -- 1(1\2) --    -- 1(1\2) --    -- 1(1\2) --    -- 1(1\2) --  
      if(welSze[i]=="1 (1/2)' ")
      {
          if(welColr[i]=="black")
          {
            bLwel_1_12= +bLwel_1_12 + ((+welL[i])*mf[i]);
            bHwel_1_12= +bHwel_1_12 + ((+welH[i])*mf[i]);
          }
          
          if(welColr[i]=="golden")
          {
            gLwel_1_12= +gLwel_1_12 + ((+welL[i])*mf[i]);
            gHwel_1_12= +gHwel_1_12 + ((+welH[i])*mf[i]);
          }
      }

      //  -- 2 --    -- 2 --    -- 2 --    -- 2 --  
      if(welSze[i]=="2' ")
      {
          if(welColr[i]=="black")
          {
            bLwel_2= +bLwel_2 + ((+welL[i])*mf[i]);
            bHwel_2= +bHwel_2 + ((+welH[i])*mf[i]);
          }
          
          if(welColr[i]=="golden")
          {
            gLwel_2= +gLwel_2 + ((+welL[i])*mf[i]);
            gHwel_2= +gHwel_2 + ((+welH[i])*mf[i]);
          }
      }


      //  -- 3 --    -- 3 --    -- 3 --    -- 3 --  
      if(welSze[i]=="3' ")
      {
          if(welColr[i]=="black")
          {
            bLwel_3= +bLwel_3 + ((+welL[i])*mf[i]);
            bHwel_3= +bHwel_3 + ((+welH[i])*mf[i]);
          }
          
          if(welColr[i]=="golden")
          {
            gLwel_3= +gLwel_3 + ((+welL[i])*mf[i]);
            gHwel_3= +gHwel_3 + ((+welH[i])*mf[i]);
          }
      }
    } // For

vlcroString = new String;


  //  --3\4--    --3\4--    --3\4--    --3\4--    --3\4--    --3\4--  
  if(bLwel_34>0 || bHwel_34>0 || gLwel_34>0 || gHwel_34>0)
  {
    vlcroString=vlcroString+"(3/4)' ";
    if(bLwel_34>0 || bHwel_34>0)
    {
     vlcroString = vlcroString + " Black [ " + bLwel_34 + " Loop  ,  " + bHwel_34 + " Hook ]";
    }
    if(gLwel_34>0 || gHwel_34>0)
    {
     vlcroString = vlcroString + " Golden [ " + gLwel_34 + " Loop  ,  "+ gHwel_34 +" Hook ]";
    }
  }

  //  --1--    --1--    --1--    --1--    --1--    --1--    --1--  
  if(bLwel_1>0 || bHwel_1>0 || gLwel_1>0 || gHwel_1>0)
  {
    vlcroString=vlcroString+"<br>1' ";
    if(bLwel_1>0 || bHwel_1>0)
    {
     vlcroString = vlcroString + " Black [ " + bLwel_1 + " Loop  ,  " + bHwel_1 + " Hook ]";
    }
    if(gLwel_1>0 || gHwel_1>0)
    {
     vlcroString = vlcroString + " Golden [ " + gLwel_1 + " Loop  ,  "+ gHwel_1 +" Hook ]";
    }
  }

  //  -- 1(1\4) --    -- 1(1\4) --    -- 1(1\4) --    -- 1(1\4) --  
  if(bLwel_1_14>0 || bHwel_1_14>0 || gLwel_1_14>0 || gHwel_1_14>0)
  {
    vlcroString=vlcroString+"<br>1(1/4)' ";
    if(bLwel_1_14>0 || bHwel_1_14>0)
    {
     vlcroString = vlcroString + " Black [ " + bLwel_1_14 + " Loop  ,  " + bHwel_1_14 + " Hook ]";
    }
    if(gLwel_1_14>0 || gHwel_1_14>0)
    {
     vlcroString = vlcroString + " Golden [ " + gLwel_1_14 + " Loop  ,  "+ gHwel_1_14 +" Hook ]";
    }
  }

  //  -- 1(1\2) --    -- 1(1\2) --    -- 1(1\2) --    -- 1(1\2) --    
  if(bLwel_1_12>0 || bHwel_1_12>0 || gLwel_1_12>0 || gHwel_1_12>0)
  {
    vlcroString=vlcroString+"<br>1(1/2)' ";
    if(bLwel_1_12>0 || bHwel_1_12>0)
    {
     vlcroString = vlcroString + " Black [ " + bLwel_1_12 + " Loop  ,  " + bHwel_1_12 + " Hook ]";
    }
    if(gLwel_1_12>0 || gHwel_1_12>0)
    {
     vlcroString = vlcroString + " Golden [ " + gLwel_1_12 + " Loop  ,  "+ gHwel_1_12 +" Hook ]";
    }
  }

  //  -- 2 --    -- 2 --    -- 2 --    -- 2 --    
  if(bLwel_2>0 || bHwel_2>0 || gLwel_2>0 || gHwel_2>0)
  {
    vlcroString=vlcroString+"<br>2' ";
    if(bLwel_2>0 || bHwel_2>0)
    {
     vlcroString = vlcroString + " Black [ " + bLwel_2 + " Loop  ,  " + bHwel_2 + " Hook ]";
    }
    if(gLwel_2>0 || gHwel_2>0)
    {
     vlcroString = vlcroString + " Golden [ " + gLwel_2 + " Loop  ,  "+ gHwel_2 +" Hook ]";
    }
  }

  //  -- 3 --    -- 3 --    -- 3 --    -- 3 --    
  if(bLwel_3>0 || bHwel_3>0 || gLwel_3>0 || gHwel_3>0)
  {
    vlcroString=vlcroString+"<br>3' ";
    if(bLwel_3>0 || bHwel_3>0)
    {
     vlcroString = vlcroString + " Black [ " + bLwel_3 + " Loop  ,  " + bHwel_3 + " Hook ]";
    }
    if(gLwel_3>0 || gHwel_3>0)
    {
     vlcroString = vlcroString + " Golden [ " + gLwel_3 + " Loop  ,  "+ gHwel_3 +" Hook ]";
    }
  }
  
  document.getElementById("weeellcro").innerHTML=vlcroString;
}  //fun

// --- ilet --- --- ilet ---  --- ilet ---  --- ilet ---  --- ilet ---  
function ilet()
{
  iletno = new Array;
  ilets = new Array;
  iletc= new Array;
  var n900_bgHN=0,n900_bgHB=0,n900_bgHG=0;
  var n900_smHN=0,n900_smHB=0,n900_smHG=0;
  var Sm_outN=0,Sm_outB=0,Sm_outG=0;
  var Bg_outN=0,Bg_outB=0,Bg_outG=0;
  var n1500N=0,n1500B=0,n1500G=0;
  var n700_mfN=0,n700_mfB=0,n700_mfG=0;

  len = $('[id="ilet_q"]').length;
    
    for (tchn of $('[id="ilet_q"]')) 
    {
      temp = tchn.innerHTML;
      iletno.push(temp);
    }  

    for (tchs of $('[id="ilet_typ"]')) 
    {
      temp = tchs.innerHTML;
      ilets.push(temp);
    }

    for (tchc of $('[id="ilet_colr"]')) 
    {
      temp = tchc.innerHTML;
      iletc.push(temp);
    }

    for(i=0;i<len;i++)
    {
        if(ilets[i]=="900 Number Big Height" && iletc[i]=="black")
        {
          n900_bgHB= +n900_bgHB + ((+iletno[i])*mf[i]);
        }
        if(ilets[i]=="900 Number Big Height" && iletc[i]=="nickel")
        {
            n900_bgHN= +n900_bgHN+ ((+iletno[i])*mf[i]);
        }         
        if(ilets[i]=="900 Number Big Height" && iletc[i]=="golden")
        {
          n900_bgHG= +n900_bgHG + ((+iletno[i])*mf[i]);
        }


        if(ilets[i]=="Small Outside" && iletc[i]=="black")
        {
          Sm_outB= +Sm_outB + ((+iletno[i])*mf[i]);
        }
        if(ilets[i]=="Small Outside" && iletc[i]=="nickel")
        {
            Sm_outN= +Sm_outN+ ((+iletno[i])*mf[i]);
        }         
        if(ilets[i]=="Small Outside" && iletc[i]=="golden")
        {
          Sm_outG= +Sm_outG + ((+iletno[i])*mf[i]);
        }


        if(ilets[i]=="Big Outside" && iletc[i]=="black")
        {
          Bg_outB= +Bg_outB + ((+iletno[i])*mf[i]);
        }
        if(ilets[i]=="Big Outside" && iletc[i]=="nickel")
        {
            Bg_outN= +Bg_outN+ ((+iletno[i])*mf[i]);
        }         
        if(ilets[i]=="Big Outside" && iletc[i]=="golden")
        {
          Bg_outG= +Bg_outG + ((+iletno[i])*mf[i]);
        }


        if(ilets[i]=="900 Number Small Height" && iletc[i]=="black")
        {
          n900_smHB= +n900_smHB + ((+iletno[i])*mf[i]);
        }
        if(ilets[i]=="900 Number Small Height" && iletc[i]=="nickel")
        {
            n900_smHN= +n900_smHN+ ((+iletno[i])*mf[i]);
        }         
        if(ilets[i]=="900 Number Small Height" && iletc[i]=="golden")
        {
          n900_smHG= +n900_smHG + ((+iletno[i])*mf[i]);
        }


        if(ilets[i]=="1500 Number" && iletc[i]=="black")
        {
          n1500B= +n1500B + ((+iletno[i])*mf[i]);
        }
        if(ilets[i]=="1500 Number" && iletc[i]=="nickel")
        {
            n1500N= +n1500N+ ((+iletno[i])*mf[i]);
        }         
        if(ilets[i]=="1500 Number" && iletc[i]=="golden")
        {
          n1500G= +n1500G + ((+iletno[i])*mf[i]);
        }


        if(ilets[i]=="700 Number(M/F)" && iletc[i]=="black")
        {
          n700_mfB= +n700_mfB + ((+iletno[i])*mf[i]);
        }
        if(ilets[i]=="700 Number(M/F)" && iletc[i]=="nickel")
        {
            n700_mfN= +n700_mfN+ ((+iletno[i])*mf[i]);
        }         
        if(ilets[i]=="700 Number(M/F)" && iletc[i]=="golden")
        {
          n700_mfG= +n700_mfG + ((+iletno[i])*mf[i]);
        }

    }
  ilet_Str=new String;
  if(n900_bgHB>0 || n900_bgHN>0 || n900_bgHG>0)
  {
    ilet_Str=ilet_Str+"<br>900 Number Big Height";
    if(n900_bgHN>0){
      ilet_Str=ilet_Str+" [ "+n900_bgHN+" Nickel ]";
    }
    if(n900_bgHB>0){
     ilet_Str=ilet_Str+" [ "+n900_bgHB  +" Black ]";
    }
    if(n900_bgHG>0){
     ilet_Str=ilet_Str+" [ "+n900_bgHG  +" Golden ]";
    }
  }

  if(Sm_outB>0 || Sm_outN>0 || Sm_outG>0)
  {
    ilet_Str=ilet_Str+"<br>Small Outside";
    if(Sm_outN>0){
      ilet_Str=ilet_Str+" [ "+Sm_outN+" Nickel ]";
    }
    if(Sm_outB>0){
     ilet_Str=ilet_Str+" [ "+Sm_outB  +" Black ]";
    }
    if(Sm_outG>0){
     ilet_Str=ilet_Str+" [ "+Sm_outG  +" Golden ]";
    }
  }

  if(Bg_outB>0 || Bg_outN>0 || Bg_outG>0)
  {
    ilet_Str=ilet_Str+"<br>Big Outside";
    if(Bg_outN>0){
      ilet_Str=ilet_Str+" [ "+Bg_outN+" Nickel ]";
    }
    if(Bg_outB>0){
     ilet_Str=ilet_Str+" [ "+Bg_outB  +" Black ]";
    }
    if(Bg_outG>0){
     ilet_Str=ilet_Str+" [ "+Bg_outG  +" Golden ]";
    }
  }

  if(n900_smHB>0 || n900_smHN>0 || n900_smHG>0)
  {
    ilet_Str=ilet_Str+"<br>900 Number Small Height";
    if(n900_smHN>0){
      ilet_Str=ilet_Str+" [ "+n900_smHN+" Nickel ]";
    }
    if(n900_smHB>0){
     ilet_Str=ilet_Str+" [ "+n900_smHB  +" Black ]";
    }
    if(n900_smHG>0){
     ilet_Str=ilet_Str+" [ "+n900_smHG  +" Golden ]";
    }
  }

  if(n1500B>0 || n1500N>0 || n1500G>0)
  {
    ilet_Str=ilet_Str+"<br>1500 Number";
    if(n1500N>0){
      ilet_Str=ilet_Str+" [ "+n1500N+" Nickel ]";
    }
    if(n1500B>0){
     ilet_Str=ilet_Str+" [ "+n1500B  +" Black ]";
    }
    if(n1500G>0){
     ilet_Str=ilet_Str+" [ "+n1500G  +" Golden ]";
    }
  }

  if(n700_mfB>0 || n700_mfN>0 || n700_mfG>0)
  {
    ilet_Str=ilet_Str+"<br>700 Number(M/F)";
    if(n700_mfN>0){
      ilet_Str=ilet_Str+" [ "+n700_mfN+" Nickel ]";
    }
    if(n700_mfB>0){
     ilet_Str=ilet_Str+" [ "+n700_mfB  +" Black ]";
    }
    if(n700_mfG>0){
     ilet_Str=ilet_Str+" [ "+n700_mfG  +" Golden ]";
    }
  }
  document.getElementById("illet").innerHTML=ilet_Str;
}

// --- TChain --- --- TChain ---  --- TChain ---  --- TChain ---  --- TChain ---  
function tChain()
{
  tChainno = new Array;
  tChains = new Array;
  tChainc= new Array;
  var tCnN=0,tCnB=0,tCnA=0,tChN=0,tChB=0,tChA=0;

  len = $('[id="tchain_q"]').length;
    
    for (tchn of $('[id="tchain_q"]')) 
    {
      temp = tchn.innerHTML;
      tChainno.push(temp);
    }  

    for (tchs of $('[id="tchain_typ"]')) 
    {
      temp = tchs.innerHTML;
      tChains.push(temp);
    }

    for (tchc of $('[id="tchain_colr"]')) 
    {
      temp = tchc.innerHTML;
      tChainc.push(temp);
    }

    for(i=0;i<len;i++)
    {
        if(tChains[i]=="normal" && tChainc[i]=="black")
        {
          tCnB= +tCnB + ((+tChainno[i])*mf[i]);
        }
        if(tChains[i]=="normal" && tChainc[i]=="nickel")
        {
            tCnN= +tCnN+ ((+tChainno[i])*mf[i]);
        }         
        if(tChains[i]=="normal" && tChainc[i]=="antique")
        {
          tCnA= +tCnA + ((+tChainno[i])*mf[i]);
        }


        if(tChains[i]=="heavy" && tChainc[i]=="black")
        {
          tChB= +tChB + ((+tChainno[i])*mf[i]);
        }
        if(tChains[i]=="heavy" && tChainc[i]=="nickel")
        {
            tChN= +tChN+ ((+tChainno[i])*mf[i]);
        }         
        if(tChains[i]=="heavy" && tChainc[i]=="antique")
        {
          tChA= +tChA + ((+tChainno[i])*mf[i]);
        }

    }
  tChain_Str=new String;

  if(tCnB>0 || tCnN>0 || tCnA>0)
  {
    tChain_Str=tChain_Str+"Normal";
    if(tCnN>0){
      tChain_Str=tChain_Str+" [ "+tCnN+" Nickel ]";
    }
    if(tCnB>0){
     tChain_Str=tChain_Str+" [ "+tCnB  +" Black ]";
    }
    if(tCnA>0){
     tChain_Str=tChain_Str+" [ "+tCnA  +" Antique ]";
    }
  }
  
  if(tChB>0 || tChN>0 || tChA>0)
  {
    tChain_Str=tChain_Str+"&nbsp;                                  <=>     Heavy";
    if(tChN>0){
      tChain_Str=tChain_Str+" [ "+tChN+" Nickel ]";
    }
    if(tChB>0){
     tChain_Str=tChain_Str+" [ "+tChB  +" Black ]";
    }
    if(tChA>0){
     tChain_Str=tChain_Str+" [ "+tChA  +" Antique ]";
    }
  }
  document.getElementById("tChaain").innerHTML=tChain_Str;
}


// --- dgHook --- --- dgHook ---  --- dgHook ---  --- dgHook ---  
function dgHook()
{
  dgHookno = new Array;
  dgHooks = new Array;
  dgPati= new Array;

var gdpti=0,d34=0,d1_Ovl=0,d1_knchy=0,d1_hvySplCLC=0,d1_12H=0,d1_12L=0;

  len = $('[id="dh_q"]').length;
    
    for (tchn of $('[id="dh_q"]')) 
    {
      temp = tchn.innerHTML;
      dgHookno.push(temp);
    }  

    for (tchs of $('[id="dh_typ"]')) 
    {
      temp = tchs.innerHTML;
      dgHooks.push(temp);
    }

    for (tchc of $('[id="dh_pti_q"]')) 
    {
      temp = tchc.innerHTML;
      dgPati.push(temp);
    }

    for(i=0;i<len;i++)
    {
        if(dgPati[i]>0)
        {
          gdpti= +gdpti + ((+dgPati[i])*mf[i]);
        }
    }
    for(i=0;i<len;i++)
    {
       
        if(dgHooks[i]=="(3/4)' ")
        {
          d34= +d34 + ((+dgHookno[i])*mf[i]);
        }

        if(dgHooks[i]=="1' Oval")
        {
          d1_Ovl= +d1_Ovl + ((+dgHookno[i])*mf[i]);
        }

        if(dgHooks[i]=="1' Kenchy")
        {
          d1_knchy= +d1_knchy + ((+dgHookno[i])*mf[i]);
        }

        if(dgHooks[i]=="1' Heavy Spcl(CLC)")
        {
          d1_hvySplCLC= +d1_hvySplCLC + ((+dgHookno[i])*mf[i]);
        }

        if(dgHooks[i]=="1 (1/2)' Heavy")
        {
          d1_12H= +d1_12H + ((+dgHookno[i])*mf[i]);
        }

        if(dgHooks[i]=="1 (1/2)' Light")
        {
          d1_12L= +d1_12L + ((+dgHookno[i])*mf[i]);
        }

    }
  dgHook_Str=new String;
  if(gdpti>0 || d34>0 || d1_Ovl>0 || d1_knchy>0 || d1_hvySplCLC>0 || d1_12H>0 || d1_12L>0)
  {
    
    if(d1_12L>0){
     dgHook_Str=dgHook_Str+" [ "+ d1_12L +"Pcs of 1 (1/2)' Light ]";
    }
        
    if(d1_12H>0){
     dgHook_Str=dgHook_Str+"<br> [ "+ d1_12H +"Pcs of 1 (1/2)' Heavy ]";
    }
    
      
    if(d1_hvySplCLC>0){
     dgHook_Str=dgHook_Str+"<br> [ "+ d1_hvySplCLC +"Pcs of 1' Heavy Spcl(CLC) ]";
    }
    
       
    if(d1_knchy>0){
     dgHook_Str=dgHook_Str+"<br> [ "+ d1_knchy +"Pcs of 1' Kenchy  ]";
    }
    
     
    if(d1_Ovl>0){
     dgHook_Str=dgHook_Str+"<br> [ "+ d1_Ovl +"Pcs of 1' Oval  ]";
    }
    
     
    if(d34>0){
     dgHook_Str=dgHook_Str+"<br> [ "+ d34 +"Pcs of (3/4)'  ]";
    }
    
    if(gdpti>0){
     dgHook_Str=dgHook_Str+"<br><b>  "+gdpti  +"Pcs of Pati D-Holder </b>";
    }
  }

  document.getElementById("ddhook").innerHTML=dgHook_Str;
}

// --- J-Hook --- --- J-Hook ---  --- J-Hook ---  --- J-Hook ---  --- J-Hook ---  
function jHook()
{
  jHookno = new Array;
  jHooks = new Array;
  jHookc= new Array;
 var jcountN=0,jcountB=0,jcountA=0;
  len = $('[id="jhook_q"]').length;
    
    for (tchn of $('[id="jhook_q"]')) 
    {
      temp = tchn.innerHTML;
      jHookno.push(temp);
    }  

    for (tchc of $('[id="jhook_colr"]')) 
    {
      temp = tchc.innerHTML;
      jHookc.push(temp);
    }

    for(i=0;i<len;i++)
    {
        if(jHookc[i]=="black")
        {
          jcountB= +jcountB + ((+jHookno[i])*mf[i]);
        }
        if(jHookc[i]=="nickel")
        {
            jcountN= +jcountN+ ((+jHookno[i])*mf[i]);
        }         
        if(jHookc[i]=="antique")
        {
          jcountA= +jcountA + ((+jHookno[i])*mf[i]);
        }

    }
  jHook_Str=new String;
  if(jcountB>0 || jcountN>0 || jcountA>0)
  {
    if(jcountN>0){
      jHook_Str=jHook_Str+" [ "+jcountN+" Nickel ]";
    }
    if(jcountB>0){
     jHook_Str=jHook_Str+" [ "+jcountB  +" Black ]";
    }
    if(jcountA>0){
     jHook_Str=jHook_Str+" [ "+jcountA  +" Antique ]";
    }
  }
  document.getElementById("jhHook").innerHTML=jHook_Str;
}

//  --- greenLine ---  --- greenLine ---  --- greenLine ---  
function greenLine()
{
  greenLineno = new Array;
  greenLines = new Array;
  var grL23=0,grL36=0,grL13_20=0;

  len = $('[id="green_q"]').length;
    
    for (tchn of $('[id="green_q"]')) 
    {
      temp = tchn.innerHTML;
      greenLineno.push(temp);
    }  

    for (tchs of $('[id="green_typ"]')) 
    {
      temp = tchs.innerHTML;
      greenLines.push(temp);
    }

    for(i=0;i<len;i++)
    {
        if(greenLines[i]=="23 gm")
        {
          grL23= +grL23 + ((+greenLineno[i])*mf[i]);
        }
        if(greenLines[i]=="36 gm")
        {
          grL36= +grL36 + ((+greenLineno[i])*mf[i]);
        }
        if(greenLines[i]=="13.20 gm")
        {
            grL13_20= +grL13_20+ ((+greenLineno[i])*mf[i]);
        } 

    }
  greenLine_Str=new String;

  if(grL23>0 || grL36>0 || grL13_20>0)
  {
    if(grL36>0){
      greenLine_Str=greenLine_Str+" [ "+grL36+" Pcs of 36 gm ] ";
    }
    if(grL23>0){
     greenLine_Str=greenLine_Str+" [ "+grL23  +" Pcs of 23 gm ] ";
    }
    if(grL13_20>0){
     greenLine_Str=greenLine_Str+" [ "+grL13_20  +" Pcs of 13.20 gm ] ";
    }
  }  

  document.getElementById("greenLine").innerHTML=greenLine_Str;
}

// --- TicH --- --- TicH ---  --- TicH ---  --- TicH ---  --- TicH ---  
function tich()
{
  tichno = new Array;
  tichs = new Array;
  tichc= new Array;
  var uk7_7N=0,uk7_7B=0,uk7_7A=0;

  len = $('[id="tich_q"]').length;
    
    for (tchn of $('[id="tich_q"]')) 
    {
      temp = tchn.innerHTML;
      tichno.push(temp);
    }  

    for (tchs of $('[id="tich_typ"]')) 
    {
      temp = tchs.innerHTML;
      tichs.push(temp);
    }

    for (tchc of $('[id="tich_colr"]')) 
    {
      temp = tchc.innerHTML;
      tichc.push(temp);
    }

    for(i=0;i<len;i++)
    {
        if(tichs[i]=="ukas vt7/7" && tichc[i]=="black")
        {
          uk7_7B= +uk7_7B + ((+tichno[i])*mf[i]);
        }
        if(tichs[i]=="ukas vt7/7" && tichc[i]=="nickel")
        {
            uk7_7N= +uk7_7N+ ((+tichno[i])*mf[i]);
        }         
        if(tichs[i]=="ukas vt7/7" && tichc[i]=="antique")
        {
          uk7_7A= +uk7_7A + ((+tichno[i])*mf[i]);
        }

    }
  tich_Str=new String;
  if(uk7_7B>0 || uk7_7N>0 || uk7_7A>0)
  {
    tich_Str=tich_Str+"ukas vt7/7";
    if(uk7_7N>0){
      tich_Str=tich_Str+" [ "+uk7_7N+" Nickel ]";
    }
    if(uk7_7B>0){
     tich_Str=tich_Str+" [ "+uk7_7B  +" Black ]";
    }
    if(uk7_7A>0){
     tich_Str=tich_Str+" [ "+uk7_7A  +" Antique ]";
    }
  }
  document.getElementById("ttich").innerHTML=tich_Str;
}


// -- Leather -- -- Leather -- -- Leather -- -- Leather -- -- Leather --
function lthr()
{
  var bl=0;
  var tGM=0;
  var fSG=0;
  var SFO_16_18=0;
  var SFY_18_20=0;
  var BgeSut_14_16=0;
  var BgeSut_16_18=0;
  var YloSut_14_16=0;
  var YloSut_16_18=0;
  var BlkSut_14_16=0;
  var VTN_24_26=0;
  var VTN_26_28=0;
  var VTB_26_28=0;
  var VT_33_35TnCN=0;
  var I_VT_L=0;
  var DwBlkFinSL=0;
  var PrOlyVTBrwnCLC_33_35=0;
  var SuspIVTL=0;
  var Tn_28_30CNL=0;
  var LBtmBkt=0;
  var LG=0;
  lthrQ = new Array;
  lthrT = new Array;
  lthrQ2 = new Array;
  lthrT2 = new Array;


  for (lq of $('[id="leather_q"]')) 
    {
      temp = lq.innerHTML;
      lthrQ.push(temp);
    }

  for (lt of $('[id="leatherTyp"]')) 
    {
      temp = lt.innerHTML;
      lthrT.push(temp);
    }

  for (lq2 of $('[id="leather_q2"]')) 
    {
      temp2 = lq2.innerHTML;
      lthrQ2.push(temp2);
    }

  for (lt2 of $('[id="leatherTyp2"]')) 
    {
      temp2 = lt2.innerHTML;
      lthrT2.push(temp2);
    }

  len = $('[id="leather_q"]').length;
  len2 = $('[id="leather_q2"]').length;

  for(i=0;i<len;i++)
    {
    if(lthrT[i]=="Bonded Leather")
      {
        bl= +bl + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Top Grain Magji 1.4-1.6mm")
      {
        tGM= +tGM + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Finish Split Grey 1.6-1.8mm")
      {
        fSG= +fSG + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Suede Finish Oily 1.6-1.8mm" || lthrT[i]=="Suede Finish Oily 1.6-1.8mm ")
      {
        SFO_16_18= +SFO_16_18 + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Suede Finish Yellow 1.8-2.0mm" || lthrT[i]=="Suede Finish Yellow 1.8-2.0mm ")
      {
        SFY_18_20= +SFY_18_20 + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Beige Suede 1.4-1.6mm")
      {
        BgeSut_14_16= +BgeSut_14_16 + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Beige Suede 1.6-1.8mm")
      {
        BgeSut_16_18= +BgeSut_16_18 + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Yellow Suede 1.4-1.6mm")
      {
        YloSut_14_16= +YloSut_14_16 + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Yellow Suede 1.6-1.8mm")
      {
        YloSut_16_18= +YloSut_16_18 + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Black Suede 1.4-1.6mm")
      {
        BlkSut_14_16= +BlkSut_14_16 + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="V.T Natural 2.4-2.6mm")
      {
        VTN_24_26= +VTN_24_26 + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="V.T Natural 2.6-2.8mm")
      {
        VTN_26_28= +VTN_26_28 + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="V.T Black 2.6-2.8mm")
      {
        VTB_26_28= +VTB_26_28 + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="V.T 3.3-3.5 Tan Ches Nut")
      {
        VT_33_35TnCN= +VT_33_35TnCN + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Indian V.T Leather")
      {
        I_VT_L= +I_VT_L + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Dewalt Black Finished Split Leather")
      {
        DwBlkFinSL= +DwBlkFinSL + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Pure Oily VT Brown CLC 3.3 x 3.5mm")
      {
        PrOlyVTBrwnCLC_33_35= +PrOlyVTBrwnCLC_33_35 + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Suspender Indian VT Leather")
      {
        SuspIVTL= +SuspIVTL + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Tan(2.8-3.0mm Ches Nut Leather)")
      {
        Tn_28_30CNL= +Tn_28_30CNL + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Leather Bottom Bucket")
      {
        LBtmBkt= +LBtmBkt + ((+lthrQ[i])*mf[i]);
      }
    if(lthrT[i]=="Leather Gloves")
      {
        LG= +LG + ((+lthrQ[i])*mf[i]);
      }     
  }
  for(i=0;i<len2;i++)
    {
    if(lthrT2[i]=="Bonded Leather")
      {
        bl= +bl + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Top Grain Magji 1.4-1.6mm")
      {
        tGM= +tGM + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Finish Split Grey 1.6-1.8mm")
      {
        fSG= +fSG + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Suede Finish Oily 1.6-1.8mm" || lthrT2[i]=="Suede Finish Oily 1.6-1.8mm ")
      {
        SFO_16_18= +SFO_16_18 + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Suede Finish Yellow 1.8-2.0mm" || lthrT2[i]=="Suede Finish Yellow 1.8-2.0mm ")
      {
        SFY_18_20= +SFY_18_20 + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Beige Suede 1.4-1.6mm")
      {
        BgeSut_14_16= +BgeSut_14_16 + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Beige Suede 1.6-1.8mm")
      {
        BgeSut_16_18= +BgeSut_16_18 + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Yellow Suede 1.4-1.6mm")
      {
        YloSut_14_16= +YloSut_14_16 + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Yellow Suede 1.6-1.8mm")
      {
        YloSut_16_18= +YloSut_16_18 + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Black Suede 1.4-1.6mm")
      {
        BlkSut_14_16= +BlkSut_14_16 + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="V.T Natural 2.4-2.6mm")
      {
        VTN_24_26= +VTN_24_26 + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="V.T Natural 2.6-2.8mm")
      {
        VTN_26_28= +VTN_26_28 + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="V.T Black 2.6-2.8mm")
      {
        VTB_26_28= +VTB_26_28 + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="V.T 3.3-3.5 Tan Ches Nut")
      {
        VT_33_35TnCN= +VT_33_35TnCN + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Indian V.T Leather")
      {
        I_VT_L= +I_VT_L + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Dewalt Black Finished Split Leather")
      {
        DwBlkFinSL= +DwBlkFinSL + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Pure Oily VT Brown CLC 3.3 x 3.5mm")
      {
        PrOlyVTBrwnCLC_33_35= +PrOlyVTBrwnCLC_33_35 + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Suspender Indian VT Leather")
      {
        SuspIVTL= +SuspIVTL + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Tan(2.8-3.0mm Ches Nut Leather)")
      {
        Tn_28_30CNL= +Tn_28_30CNL + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Leather Bottom Bucket")
      {
        LBtmBkt= +LBtmBkt + ((+lthrQ2[i])*mf[i]);
      }
    if(lthrT2[i]=="Leather Gloves")
      {
        LG= +LG + ((+lthrQ2[i])*mf[i]);
      }     
  }
  lthrStr=new String;

    if(bl>0){
      lthrStr = lthrStr + "<br><b> Bonded Leather </b> [ " + bl + "    SQ. FT. ]<br>";
    }
    if(tGM>0){
      lthrStr = lthrStr + "<br><b> Top Grain Magji 1.4-1.6mm </b> [ " + tGM + "    SQ. FT. ]<br>";
    }
    if(fSG>0){
      lthrStr = lthrStr + "<br><b> Finish Split Grey 1.6-1.8mm </b> [ " + fSG + "    SQ. FT. ]<br>";
    }
    if(SFO_16_18>0){
      lthrStr = lthrStr + "<br><b> Suede Finish Oily 1.6-1.8mm </b> [ " + SFO_16_18 + "    SQ. FT. ]<br>";
    }
    if(SFY_18_20>0){
      lthrStr = lthrStr + "<br><b> Suede Finish Yellow 1.8-2.0mm </b> [ " + SFY_18_20 + "    SQ. FT. ]<br>";
    }
    if(BgeSut_14_16>0){
      lthrStr = lthrStr + "<br><b> Beige Suede 1.4-1.6mm </b> [ " + BgeSut_14_16 + "    SQ. FT. ]<br>";
    }
    if(BgeSut_16_18>0){
      lthrStr = lthrStr + "<br><b> Beige Suede 1.6-1.8mm </b> [ " + BgeSut_16_18 + "    SQ. FT. ]<br>";
    }
    if(YloSut_14_16>0){
      lthrStr = lthrStr + "<br><b> Yellow Suede 1.4-1.6mm </b> [ " + YloSut_14_16 + "    SQ. FT. ]<br>";
    }
    if(YloSut_16_18>0){
      lthrStr = lthrStr + "<br><b> Yellow Suede 1.6-1.8mm </b> [ " + YloSut_16_18 + "    SQ. FT. ]<br>";
    }
    if(BlkSut_14_16>0){
      lthrStr = lthrStr + "<br><b> Black Suede 1.4-1.6mm </b> [ " + BlkSut_14_16 + "    SQ. FT. ]<br>";
    }
    if(VTN_24_26>0){
      lthrStr = lthrStr + "<br><b> V.T Natural 2.4-2.6mm </b> [ " + VTN_24_26 + "    SQ. FT. ]<br>";
    }
    if(VTN_26_28>0){
      lthrStr = lthrStr + "<br><b> V.T Natural 2.6-2.8mm </b> [ " + VTN_26_28 + "    SQ. FT. ]<br>";
    }
    if(VTB_26_28>0){
      lthrStr = lthrStr + "<br><b> V.T Black 2.6-2.8mm </b> [ " + VTB_26_28 + "    SQ. FT. ]<br>";
    }
    if(VT_33_35TnCN>0){
      lthrStr = lthrStr + "<br><b> V.T 3.3-3.5 Tan Ches Nut </b> [ " + VT_33_35TnCN + "    SQ. FT. ]<br>";
    }
    if(I_VT_L>0){
      lthrStr = lthrStr + "<br><b> Indian V.T Leather </b> [ " + I_VT_L + "    SQ. FT. ]<br>";
    }
    if(DwBlkFinSL>0){
      lthrStr = lthrStr + "<br><b> Dewalt Black Finished Split Leather </b> [ " + DwBlkFinSL + "    SQ. FT. ]<br>";
    }
    if(PrOlyVTBrwnCLC_33_35>0){
      lthrStr = lthrStr + "<br><b> Pure Oily VT Brown CLC 3.3 x 3.5mm </b> [ " + PrOlyVTBrwnCLC_33_35 + "    SQ. FT. ]<br>";
    }
    if(SuspIVTL>0){
      lthrStr = lthrStr + "<br><b> Suspender Indian VT Leather </b> [ " + SuspIVTL + "    SQ. FT. ]<br>";
    }
    if(Tn_28_30CNL>0){
      lthrStr = lthrStr + "<br><b> Tan(2.8-3.0mm Ches Nut Leather) </b> [ " + Tn_28_30CNL + "    SQ. FT. ]<br>";
    }
    if(LBtmBkt>0){
      lthrStr = lthrStr + "<br><b> Leather Bottom Bucket </b> [ " + LBtmBkt + "    SQ. FT. ]<br>";
    }
    if(LG>0){
      lthrStr = lthrStr + "<br><b> Leather Gloves </b> [ " + LG + "    SQ. FT. ]<br>";
    }

  document.getElementById("leather").innerHTML=lthrStr;
}

// --- TH --- --- TH ---  --- TH ---  --- TH ---  --- TH ---  
function th()
{
  thno = new Array;
  ths = new Array;
  thc= new Array;
  var stantk=0,stblk=0,stnck=0,stdtantk=0,stdtblk=0,stdtnck=0,ltantk=0,ltblk=0,ltnck=0;
  len = $('[id="th_no"]').length;
    
    for (wn of $('[id="th_no"]')) 
    {
      temp = wn.innerHTML;
      thno.push(temp);
    }  

    for (ws of $('[id="th_size"]')) 
    {
      temp = ws.innerHTML;
      ths.push(temp);
    }

    for (wc of $('[id="th_color"]')) 
    {
      temp = wc.innerHTML;
      thc.push(temp);
    }

    for(i=0;i<len;i++)
    {
        if(ths[i]=="LARGE" && thc[i]=="black")
        {
          ltblk= +ltblk + ((+thno[i])*mf[i]);
        }
        if(ths[i]=="LARGE" && thc[i]=="nickel")
        {
            ltnck= +ltnck+ ((+thno[i])*mf[i]);
        }         
        if(ths[i]=="LARGE" && thc[i]=="antique")
        {
          ltantk= +ltantk + ((+thno[i])*mf[i]);
        }

        if(ths[i]=="SMALL" && thc[i]=="black")
        {
          stblk= +stblk + ((+thno[i])*mf[i]);
        }
        if(ths[i]=="SMALL" && thc[i]=="nickel")
        {
            stnck= +stnck+ ((+thno[i])*mf[i]);
        }         
        if(ths[i]=="SMALL" && thc[i]=="antique")
        {
            stantk= +stantk + ((+thno[i])*mf[i]);
        }

        if(ths[i]=="STANDARD" && thc[i]=="black")
        {
          stdtblk= +stdtblk + ((+thno[i])*mf[i]);
        }
        if(ths[i]=="STANDARD" && thc[i]=="nickel")
        {
            stdtnck= +stdtnck+ ((+thno[i])*mf[i]);
        }         
        if(ths[i]=="STANDARD" && thc[i]=="antique")
        {
            stdtantk= +stdtantk + ((+thno[i])*mf[i]);
        }
    }
  th_Str=new String;
  if(stnck>0 || stblk>0 || stantk>0)
  {
    th_Str=th_Str+"Small ";
    if(stnck>0){
      th_Str=th_Str+" [ "+stnck+" Nickel ]";
    }
    if(stblk>0){
     th_Str=th_Str+" [ "+stblk  +" Black ]";
    }
    if(stantk>0){
     th_Str=th_Str+" [ "+stantk  +" Antique ]";
    }
  }

  if(stdtblk>0 || stdtnck>0 || stdtantk>0)
  {
    th_Str=th_Str+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<=>&nbsp;&nbsp;&nbsp;&nbsp;Standard ";
    if(stdtblk>0){
      th_Str=th_Str+" [ "+stdtblk+" Black ]";
    }
    if(stdtnck>0){
     th_Str=th_Str+" [ "+stdtnck  +" Nickel ]";
    }
    if(stdtantk>0){
     th_Str=th_Str+" [ "+stdtantk  +" Antique ]";
    }
  }


  if(ltblk>0 || ltnck>0 || ltantk>0)
  {
    th_Str=th_Str+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<=>&nbsp;&nbsp;&nbsp;&nbsp;Large ";
    if(ltblk>0){
      th_Str=th_Str+" [ "+ltblk+" Black ]";
    }
    if(ltnck>0){
     th_Str=th_Str+" [ "+ltnck  +" Nickel ]";
    }
    if(ltantk>0){
     th_Str=th_Str+" [ "+ltantk  +" Antique ]";
    }
  }
  document.getElementById("th").innerHTML=th_Str;
}


// -- Belt --  -- Belt --  -- Belt --  -- Belt --  -- Belt --  -- Belt --  -- Belt --  -- Belt -- 
function blt()
{
  beltq = new Array;
  beltTyp= new Array;
  beltq2 = new Array;
  beltTyp2= new Array;
  beltq3 = new Array;
  beltTyp3= new Array;
  var lthr=0,nali=0,nali50=0,nali56=0,hvyNali50=0,xtraPow=0,kbrand=0,bky2_53=0,bk38_11=0,ybk2_45=0,bk43_11=0,mc_56=0,kh_52=0,Blk_38_HS=0,Blk_25_HS=0,NB_50_41=0,B_50_41=0,R_50_41=0,B_Yl_4_5=0,Y_Bl_4_5=0;
  len = $('[id="belt_typ"]').length;
    
    for (bq of $('[id="belt_no"]')) 
    {
      temp = bq.innerHTML;
      beltq.push(temp);
    }  

    for (bt of $('[id="belt_typ"]')) 
    {
      temp = bt.innerHTML;
      beltTyp.push(temp);
    }
    
    for (bq2 of $('[id="belt_no2"]')) 
    {
      temp = bq2.innerHTML;
      beltq2.push(temp);
    }  

    for (bt2 of $('[id="belt_typ2"]')) 
    {
      temp = bt2.innerHTML;
      beltTyp2.push(temp);
    }  
    for (bq3 of $('[id="belt_no3"]')) 
    {
      temp = bq3.innerHTML;
      beltq3.push(temp);
    }  

    for (bt3 of $('[id="belt_typ3"]')) 
    {
      temp = bt3.innerHTML;
      beltTyp3.push(temp);
    }

    for(i=0;i<len;i++)
    {
        if(beltTyp[i]=="LEATHER BELT")
        {
          lthr= +lthr + ((+beltq[i])*mf[i]);
        }
        if(beltTyp[i]=="BLK/NALI BELT")
        {
          nali= +nali + ((+beltq[i])*mf[i]);
        }
        if(beltTyp[i]=="SPCL 50 BLK/NALI BELT")
        {
          nali50= +nali50 + ((+beltq[i])*mf[i]);
        }
        if(beltTyp[i]=="SPCL 56 BLK/NALI BELT")
        {
          nali56= +nali56 + ((+beltq[i])*mf[i]);
        }
        if(beltTyp[i]=="HEYV SPCL 50 BLK PALIN BELT")
        {
          hvyNali50= +hvyNali50 + ((+beltq[i])*mf[i]);
        }
        if(beltTyp[i]=="BLK EXTRA POW 2'X 35' ")
        {
          xtraPow= +xtraPow + ((+beltq[i])*mf[i]);
        }
        if(beltTyp[i]=="BLK NALI 2' K BRAND 56' -136grm")
        {
          kbrand= +kbrand + ((+beltq[i])*mf[i]);
        }
         if(beltTyp[i]=="BLK YELO LINE 2'  53' ")
        {
          bky2_53= +bky2_53 + ((+beltq[i])*mf[i]);
        }
         if(beltTyp[i]=="38 BLK BELT 11'")
        {
          bk38_11= +bk38_11 + ((+beltq[i])*mf[i]);
        }
         if(beltTyp[i]=="43 BLK BELT 11'")
        {
          bk43_11= +bk43_11 + ((+beltq[i])*mf[i]);
        }
         if(beltTyp[i]=="YELO BLK LINE 2' 4.5' ")
        {
          ybk2_45= +ybk2_45 + ((+beltq[i])*mf[i]);
        }
        if(beltTyp[i]=="Mouse Color -56' ")
        {
          mc_56= +mc_56 + ((+beltq[i])*mf[i]);
        }
        // ----------
        if(beltTyp[i]=="KHAKI -52' ")
        {
          kh_52= +kh_52 + ((+beltq[i])*mf[i]);
        }
        if(beltTyp[i]=="38 BLK HVY SPL BELT")
        {
          Blk_38_HS= +Blk_38_HS + ((+beltq[i])*mf[i]);
        }
        if(beltTyp[i]=="25 BLK HVY SPL BELT")
        {
          Blk_25_HS= +Blk_25_HS + ((+beltq[i])*mf[i]);
        }
        if(beltTyp[i]=="NVY BLUE 50MM 41'")
        {
          NB_50_41= +NB_50_41 + ((+beltq[i])*mf[i]);
        }
        if(beltTyp[i]=="BLACK 50MM 41'")
        {
          B_50_41= +B_50_41 + ((+beltq[i])*mf[i]);
        }
        if(beltTyp[i]=="RED 50MM 41'")
        {
          R_50_41= +R_50_41 + ((+beltq[i])*mf[i]);
        }
        if(beltTyp[i]=="BLK YELO LINE 4.5' ")
        {
          B_Yl_4_5= +B_Yl_4_5 + ((+beltq[i])*mf[i]);
        }
        if(beltTyp[i]=="YELO BLK LINE 4.5' ")
        {
          Y_Bl_4_5= +Y_Bl_4_5 + ((+beltq[i])*mf[i]);
        }

    }
    for(i=0;i<len;i++)
    {
        if(beltTyp2[i]=="LEATHER BELT")
        {
          lthr= +lthr + ((+beltq2[i])*mf[i]);
        }
        if(beltTyp2[i]=="BLK/NALI BELT")
        {
          nali= +nali + ((+beltq2[i])*mf[i]);
        }
        if(beltTyp2[i]=="SPCL 50 BLK/NALI BELT")
        {
          nali50= +nali50 + ((+beltq2[i])*mf[i]);
        }
        if(beltTyp2[i]=="SPCL 56 BLK/NALI BELT")
        {
          nali56= +nali56 + ((+beltq2[i])*mf[i]);
        }
        if(beltTyp2[i]=="HEYV SPCL 50 BLK PALIN BELT")
        {
          hvyNali50= +hvyNali50 + ((+beltq2[i])*mf[i]);
        }
        if(beltTyp2[i]=="BLK EXTRA POW 2'X 35' ")
        {
          xtraPow= +xtraPow + ((+beltq2[i])*mf[i]);
        }
        if(beltTyp2[i]=="BLK NALI 2' K BRAND 56' -136grm")
        {
          kbrand= +kbrand + ((+beltq2[i])*mf[i]);
        }
         if(beltTyp2[i]=="BLK YELO LINE 2'  53' ")
        {
          bky2_53= +bky2_53 + ((+beltq2[i])*mf[i]);
        }
         if(beltTyp2[i]=="38 BLK BELT 11'")
        {
          bk38_11= +bk38_11 + ((+beltq2[i])*mf[i]);
        }
         if(beltTyp2[i]=="43 BLK BELT 11'")
        {
          bk43_11= +bk43_11 + ((+beltq2[i])*mf[i]);
        }
         if(beltTyp2[i]=="YELO BLK LINE 2' 4.5' ")
        {
          ybk2_45= +ybk2_45 + ((+beltq2[i])*mf[i]);
        }
        if(beltTyp2[i]=="Mouse Color -56' ")
        {
          mc_56= +mc_56 + ((+beltq2[i])*mf[i]);
        }
        if(beltTyp2[i]=="Mouse Color -56' ")
        {
          mc_56= +mc_56 + ((+beltq2[i])*mf[i]);
        }
        // ----------
        if(beltTyp[i]=="KHAKI -52' ")
        {
          kh_52= +kh_52 + ((+beltq[i])*mf[i]);
        }
        if(beltTyp2[i]=="38 BLK HVY SPL BELT")
        {
          Blk_38_HS= +Blk_38_HS + ((+beltq2[i])*mf[i]);
        }
        if(beltTyp2[i]=="25 BLK HVY SPL BELT")
        {
          Blk_25_HS= +Blk_25_HS + ((+beltq2[i])*mf[i]);
        }
        if(beltTyp2[i]=="NVY BLUE 50MM 41'")
        {
          NB_50_41= +NB_50_41 + ((+beltq2[i])*mf[i]);
        }
        if(beltTyp2[i]=="BLACK 50MM 41'")
        {
          B_50_41= +B_50_41 + ((+beltq2[i])*mf[i]);
        }
        if(beltTyp2[i]=="RED 50MM 41'")
        {
          R_50_41= +R_50_41 + ((+beltq2[i])*mf[i]);
        }
        if(beltTyp2[i]=="BLK YELO LINE 4.5' ")
        {
          B_Yl_4_5= +B_Yl_4_5 + ((+beltq2[i])*mf[i]);
        }
        if(beltTyp2[i]=="YELO BLK LINE 4.5' ")
        {
          Y_Bl_4_5= +Y_Bl_4_5 + ((+beltq2[i])*mf[i]);
        }
    }
    for(i=0;i<len;i++)
    {
        if(beltTyp3[i]=="LEATHER BELT")
        {
          lthr= +lthr + ((+beltq3[i])*mf[i]);
        }
        if(beltTyp3[i]=="BLK/NALI BELT")
        {
          nali= +nali + ((+beltq3[i])*mf[i]);
        }
        if(beltTyp3[i]=="SPCL 50 BLK/NALI BELT")
        {
          nali50= +nali50 + ((+beltq3[i])*mf[i]);
        }
        if(beltTyp3[i]=="SPCL 56 BLK/NALI BELT")
        {
          nali56= +nali56 + ((+beltq3[i])*mf[i]);
        }
        if(beltTyp3[i]=="HEYV SPCL 50 BLK PALIN BELT")
        {
          hvyNali50= +hvyNali50 + ((+beltq3[i])*mf[i]);
        }
        if(beltTyp3[i]=="BLK EXTRA POW 2'X 35' ")
        {
          xtraPow= +xtraPow + ((+beltq3[i])*mf[i]);
        }
        if(beltTyp3[i]=="BLK NALI 2' K BRAND 56' -136grm")
        {
          kbrand= +kbrand + ((+beltq3[i])*mf[i]);
        }
         if(beltTyp3[i]=="BLK YELO LINE 2'  53' ")
        {
          bky2_53= +bky2_53 + ((+beltq3[i])*mf[i]);
        }
         if(beltTyp3[i]=="38 BLK BELT 11'")
        {
          bk38_11= +bk38_11 + ((+beltq3[i])*mf[i]);
        }
         if(beltTyp3[i]=="43 BLK BELT 11'")
        {
          bk43_11= +bk43_11 + ((+beltq3[i])*mf[i]);
        }
         if(beltTyp3[i]=="YELO BLK LINE 2' 4.5' ")
        {
          ybk2_45= +ybk2_45 + ((+beltq3[i])*mf[i]);
        }
        if(beltTyp3[i]=="Mouse Color -56' ")
        {
          mc_56= +mc_56 + ((+beltq3[i])*mf[i]);
        }
        if(beltTyp3[i]=="Mouse Color -56' ")
        {
          mc_56= +mc_56 + ((+beltq3[i])*mf[i]);
        }
        // ----------
        if(beltTyp[i]=="KHAKI -52' ")
        {
          kh_52= +kh_52 + ((+beltq[i])*mf[i]);
        }
        if(beltTyp3[i]=="38 BLK HVY SPL BELT")
        {
          Blk_38_HS= +Blk_38_HS + ((+beltq3[i])*mf[i]);
        }
        if(beltTyp3[i]=="25 BLK HVY SPL BELT")
        {
          Blk_25_HS= +Blk_25_HS + ((+beltq3[i])*mf[i]);
        }
        if(beltTyp3[i]=="NVY BLUE 50MM 41'")
        {
          NB_50_41= +NB_50_41 + ((+beltq3[i])*mf[i]);
        }
        if(beltTyp3[i]=="BLACK 50MM 41'")
        {
          B_50_41= +B_50_41 + ((+beltq3[i])*mf[i]);
        }
        if(beltTyp3[i]=="RED 50MM 41'")
        {
          R_50_41= +R_50_41 + ((+beltq3[i])*mf[i]);
        }
        if(beltTyp3[i]=="BLK YELO LINE 4.5' ")
        {
          B_Yl_4_5= +B_Yl_4_5 + ((+beltq3[i])*mf[i]);
        }
        if(beltTyp3[i]=="YELO BLK LINE 4.5' ")
        {
          Y_Bl_4_5= +Y_Bl_4_5 + ((+beltq3[i])*mf[i]);
        }
    }
  lthr=(lthr * 1);
  nali=(nali * 0.094);
  nali50=(nali50 * 0.104);
  nali56=(nali56 * 0.124);
  hvyNali50=(hvyNali50 * 0.098);
  xtraPow=(xtraPow * 0.08);
  kbrand=(kbrand * 0.136);
  bky2_53=(bky2_53 * 0.096);
  bk38_11=(bk38_11 * 0.016);
  bk43_11=(bk43_11 * 0.13);
  ybk2_45=(ybk2_45 * 0.008);
  mc_56=(mc_56 * 0.026);
  kh_52=(kh_52 * 0.096); 
  B_Yl_4_5=(B_Yl_4_5 * 0.008);
  Y_Bl_4_5=(Y_Bl_4_5 * 0.008);
  // Blk_38_HS=;
  // Blk_25_HS=;
  // NB_50_41=;
  // B_50_41=;
  // R_50_41=;

  Belt_Str=new String;

  if(lthr>0)
  {
    Belt_Str=Belt_Str+" Leather-Belt [ "+lthr+" Pcs ]";
  }

  if(nali>0)
  {
    Belt_Str=Belt_Str+"<br> BLK/NALI[ "+nali+" Kg ]";
  }

  if(nali50>0)
  {
    Belt_Str=Belt_Str+"<br> SPCL 50 BLK/NALI [ "+nali50+" Kg ]";
  }
  if(nali56>0)
  {
    Belt_Str=Belt_Str+"<br> SPCL 56 BLK/NALI [ "+nali56+" Kg ]";
  }

  if(hvyNali50>0)
  {
    Belt_Str=Belt_Str+"<br> HEYV SPCL 50 BLK PALIN  [ "+hvyNali50+" Kg ]";
  }

  if(xtraPow>0)
  {
    Belt_Str=Belt_Str+"<br> BLK EXTRA POW 2'X 35'  [ "+xtraPow+" Kg ]";
  }

  if(kbrand>0)
  {
    Belt_Str=Belt_Str+"<br> BLK NALI 2' K BRAND 56'  [ "+kbrand+" Kg ]";
  }
  if(bky2_53>0)
  {
    Belt_Str=Belt_Str+"<br> BLK YELO LINE 2'  53'  [ "+bky2_53+" Kg ]";
  }
  if(bk38_11>0)
  {
    Belt_Str=Belt_Str+"<br> 38 BLK BELT 11'  [ "+bk38_11+" Kg ]";
  }
  if(bk43_11>0)
  {
    Belt_Str=Belt_Str+"<br> 43 BLK BELT 11'  [ "+bk43_11+" Kg ]";
  }
  if(ybk2_45>0)
  {
    Belt_Str=Belt_Str+"<br> YELO BLK LINE 2' 4.5'  [ "+ybk2_45+" Kg ]";
  }
  if(mc_56>0)
  {
    Belt_Str=Belt_Str+"<br> Mouse Color -56' [ "+mc_56+" Kg ]";
  }
  if(kh_52>0)
  {
    Belt_Str=Belt_Str+"<br> Khaki -52' [ "+kh_52+" Kg ]";
  }
  if(Blk_38_HS>0)
  {
    Belt_Str=Belt_Str+"<br> 38 BLK HVY SPL BELT [ "+Blk_38_HS+" Kg ]";
  }
  if(Blk_25_HS>0)
  {
    Belt_Str=Belt_Str+"<br> 25 BLK HVY SPL BELT [ "+Blk_25_HS+" Kg ]";
  }
  if(NB_50_41>0)
  {
    Belt_Str=Belt_Str+"<br> NVY BLUE 50MM 41' [ "+NB_50_41+" Kg ]";
  }
  if(B_50_41>0)
  {
    Belt_Str=Belt_Str+"<br> BLACK 50MM 41' [ "+B_50_41+" Kg ]";
  }

  if(R_50_41>0)
  {
    Belt_Str=Belt_Str+"<br> RED 50MM 41' [ "+R_50_41+" Kg ]";
  }

  if(B_Yl_4_5>0)
  {
    Belt_Str=Belt_Str+"<br> BLK YELO LINE 4.5'  [ "+B_Yl_4_5+" Kg ]";
  }

  if(Y_Bl_4_5>0)
  {
    Belt_Str=Belt_Str+"<br> YELO BLK LINE 4.5'   [ "+Y_Bl_4_5+" Kg ]";
  }

  document.getElementById("belt").innerHTML=Belt_Str;
}

// --- HH ---   --- HH ---   --- HH ---   --- HH ---   --- HH ---   --- HH ---   --- HH ---   --- HH ---  
function hh()
{
  hhno1 = new Array;
  hht1= new Array;
  hhno2 = new Array;
  hht2= new Array;
  hhc= new Array;
  var fhantk=0,fhblk=0,fhnck=0,shantk=0,shblk=0,shnck=0,Nrhantk=0,Nrhblk=0,Nrhnck=0,Hrhantk=0,Hrhblk=0,Hrhnck=0;
  len = $('[id="hh_no1"]').length;
    
    for (hn1 of $('[id="hh_no1"]')) 
    {
      temp = hn1.innerHTML;
      hhno1.push(temp);
    }  

    for (ht1 of $('[id="hh_typ1"]')) 
    {
      temp = ht1.innerHTML;
      hht1.push(temp);
    }  

    for (hn2 of $('[id="hh_no2"]')) 
    {
      temp = hn2.innerHTML;
      hhno2.push(temp);
    }  

    for (ht2 of $('[id="hh_typ2"]')) 
    {
      temp = ht2.innerHTML;
      hht2.push(temp);
    }  

    for (hc of $('[id="hh_color"]')) 
    {
      temp = hc.innerHTML;
      hhc.push(temp);
    }

    for(i=0;i<len;i++)
    {
        if(hht1[i]=="SPRING" && hhc[i]=="black")
        {
          shblk= +shblk + ((+hhno1[i])*mf[i]);
        }
        if(hht1[i]=="SPRING" && hhc[i]=="nickel")
        {
            shnck= +shnck+ ((+hhno1[i])*mf[i]);       
        }         
        if(hht1[i]=="SPRING" && hhc[i]=="antique")
        {
          shantk= +shantk + ((+hhno1[i])*mf[i]);
        }
     

        if(hht1[i]=="FIXED" && hhc[i]=="black")
        {
          fhblk= +fhblk + ((+hhno1[i])*mf[i]);
        }
        if(hht1[i]=="FIXED" && hhc[i]=="nickel")
        {
          fhnck= +fhnck+ ((+hhno1[i])*mf[i]);       
        }         
        if(hht1[i]=="FIXED" && hhc[i]=="antique")
        {
          fhantk= +fhantk + ((+hhno1[i])*mf[i]);
        }

        if(hht1[i]=="REVOLVING HVY" && hhc[i]=="black")
        {
          Hrhblk= +Hrhblk + ((+hhno1[i])*mf[i]);
        }
        if(hht1[i]=="REVOLVING HVY" && hhc[i]=="nickel")
        {
          Hrhnck= +Hrhnck+ ((+hhno1[i])*mf[i]);       
        }         
        if(hht1[i]=="REVOLVING HVY" && hhc[i]=="antique")
        {
          Hrhantk= +Hrhantk + ((+hhno1[i])*mf[i]);
        }

        if(hht1[i]=="REVOLVING NORMAL" && hhc[i]=="black")
        {
          Nrhblk= +Nrhblk + ((+hhno1[i])*mf[i]);
        }
        if(hht1[i]=="REVOLVING NORMAL" && hhc[i]=="nickel")
        {
          Nrhnck= +Nrhnck+ ((+hhno1[i])*mf[i]);       
        }         
        if(hht1[i]=="REVOLVING NORMAL" && hhc[i]=="antique")
        {
          Nrhantk= +Nrhantk + ((+hhno1[i])*mf[i]);
        }
  // -- 2--  -- 2--  -- 2--  -- 2--  -- 2--  -- 2--  -- 2--  -- 2--  -- 2--  -- 2--  -- 2--  -- 2-- 
        if(hht2[i]=="SPRING" && hhc[i]=="black")
        {
          shblk= +shblk + ((+hhno2[i])*mf[i]);
        }
        if(hht2[i]=="SPRING" && hhc[i]=="nickel")
        {
            shnck= +shnck+ ((+hhno2[i])*mf[i]);       
        }         
        if(hht2[i]=="SPRING" && hhc[i]=="antique")
        {
          shantk= +shantk + ((+hhno2[i])*mf[i]);
        }
     

        if(hht2[i]=="FIXED" && hhc[i]=="black")
        {
          fhblk= +fhblk + ((+hhno2[i])*mf[i]);
        }
        if(hht2[i]=="FIXED" && hhc[i]=="nickel")
        {
          fhnck= +fhnck+ ((+hhno2[i])*mf[i]);       
        }         
        if(hht2[i]=="FIXED" && hhc[i]=="antique")
        {
          fhantk= +fhantk + ((+hhno2[i])*mf[i]);
        }
     

        if(hht2[i]=="REVOLVING HVY" && hhc[i]=="black")
        {
          Hrhblk= +Hrhblk + ((+hhno2[i])*mf[i]);
        }
        if(hht2[i]=="REVOLVING HVY" && hhc[i]=="nickel")
        {
          Hrhnck= +Hrhnck+ ((+hhno2[i])*mf[i]);       
        }         
        if(hht2[i]=="REVOLVING HVY" && hhc[i]=="antique")
        {
          Hrhantk= +Hrhantk + ((+hhno2[i])*mf[i]);
        }

        if(hht1[i]=="REVOLVING NORMAL" && hhc[i]=="black")
        {
          Nrhblk= +Nrhblk + ((+hhno1[i])*mf[i]);
        }
        if(hht1[i]=="REVOLVING NORMAL" && hhc[i]=="nickel")
        {
          Nrhnck= +Nrhnck+ ((+hhno1[i])*mf[i]);       
        }         
        if(hht1[i]=="REVOLVING NORMAL" && hhc[i]=="antique")
        {
          Nrhantk= +Nrhantk + ((+hhno1[i])*mf[i]);
        }

    }
  hh_Str= new String;
   
  if(fhnck>0 || fhblk>0 || fhantk>0)
  {
    hh_Str=hh_Str+" Fixed ";
    if(fhnck>0){
      hh_Str=hh_Str+" [ "+fhnck+" Nickel ]";
    }
    if(fhblk>0){
     hh_Str=hh_Str+" [ "+fhblk  +" Black ]";
    }
    if(fhantk>0){
     hh_Str=hh_Str+" [ "+fhantk  +" Antique ]";
    }
  }

  if(shnck>0 || shblk>0 || shantk>0)
  {
    hh_Str=hh_Str+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<=>&nbsp;&nbsp;&nbsp;&nbsp;Spring ";
    if(shnck>0){
      hh_Str=hh_Str+" [ "+shnck+" Nickel ]";
    }
    if(shblk>0){
     hh_Str=hh_Str+" [ "+shblk  +" Black ]";
    }
    if(shantk>0){
     hh_Str=hh_Str+" [ "+shantk  +" Antique ]";
    }
  }
   
  if(Hrhnck>0 || Hrhblk>0 || Hrhantk>0)
  {
    hh_Str=hh_Str+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<=>&nbsp;&nbsp;&nbsp;&nbsp;Revolving Heavy";
    if(Hrhnck>0){
      hh_Str=hh_Str+" [ "+Hrhnck+" Nickel ]";
    }
    if(Hrhblk>0){
     hh_Str=hh_Str+" [ "+Hrhblk  +" Black ]";
    }
    if(Hrhantk>0){
     hh_Str=hh_Str+" [ "+Hrhantk  +" Antique ]";
    }
  }

  if(Nrhnck>0 || Nrhblk>0 || Nrhantk>0)
  {
    hh_Str=hh_Str+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<=>&nbsp;&nbsp;&nbsp;&nbsp;Revolving Normal";
    if(Nrhnck>0){
      hh_Str=hh_Str+" [ "+Nrhnck+" Nickel ]";
    }
    if(Nrhblk>0){
     hh_Str=hh_Str+" [ "+Nrhblk  +" Black ]";
    }
    if(Nrhantk>0){
     hh_Str=hh_Str+" [ "+Nrhantk  +" Antique ]";
    }
  }
  document.getElementById("hamrhdlr").innerHTML=hh_Str;
}

//----Imp Cap-----Imp Cap------Imp Cap------Imp Cap------Imp Cap------Imp Cap---
function cap()
{
  capno = new Array;
  capc= new Array;
  var cantk=0,cblk=0,cnck=0;
  len = $('[id="cap_no"]').length;
    
    for (cn of $('[id="cap_no"]')) 
    {
      temp = cn.innerHTML;
      capno.push(temp);
    }  

    for (cc of $('[id="cap_color"]')) 
    {
      temp = cc.innerHTML;
      capc.push(temp);
    }

    for(i=0;i<len;i++)
    {
        if(capc[i]=="black")
        {
          cblk= +cblk + ((+capno[i])*mf[i]);
        }
        if(capc[i]=="nickel")
        {
            cnck= +cnck+ ((+capno[i])*mf[i]);
        }         
        if(capc[i]=="antique")
        {
          cantk= +cantk + ((+capno[i])*mf[i]);
        }
    }
    
  cap_Str=new String;
    if(cnck>0){
      cap_Str=cap_Str+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;&nbsp;"+cnck+" Nickel ]";
    }
    if(cblk>0){
     cap_Str=cap_Str+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;&nbsp;"+cblk  +" Black ]";
    }
    if(cantk>0){
     cap_Str=cap_Str+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;&nbsp;"+cantk  +" Antique ]";
    }

  document.getElementById("ImpCap").innerHTML=cap_Str;
}

// --- stud --- --- stud ---  --- stud ---  --- stud ---  --- stud ---  --- stud ---  
function stud()
{
  sno = new Array;
  len = $('[id="antstud_no"]').length;
  var counterstud=0;
  for (sn of $('[id="antstud_no"]')) 
    {
      temp = sn.innerHTML;
      sno.push(temp);
    }  

  for(i=0;i<len;i++)
    {
        if(sno[i])
        {
          counterstud= +counterstud + ((+sno[i])*mf[i]);
        }
    }


  stud_Str=new String;
    if(counterstud>0)
    {
      stud_Str=stud_Str+" [ "+counterstud+" Pcs ]";
    }

  document.getElementById("AStud").innerHTML=stud_Str;
}

// --- frame --- --- frame ---  --- frame ---  --- frame ---  --- frame ---  --- frame ---  
function frame()
{
  fno = new Array;
  len = $('[id="frame_no"]').length;
  var counterframe=0;
  for (fn of $('[id="frame_no"]')) 
    {
      temp = fn.innerHTML;
      fno.push(temp);
    }  

  for(i=0;i<len;i++)
    {
        if(fno[i])
        {
          counterframe= +counterframe + ((+fno[i])*mf[i]);
        }
    }
    
  frame_Str=new String;
    if(counterframe>0){
      frame_Str=frame_Str+" [ "+counterframe+" Pcs ]";
    }

  document.getElementById("Framee").innerHTML=frame_Str;
}

//----washer--------washer--------washer--------washer--------washer--------washer--------washer----
function washer()
{
 wshrno = new Array;
  wshrc= new Array;
  var wantk=0,wblk=0,wnck=0;
  len = $('[id="washer_no"]').length;
    
    for (wn of $('[id="washer_no"]')) 
    {
      temp = wn.innerHTML;
      wshrno.push(temp);
    }  

    for (wc of $('[id="washer_color"]')) 
    {
      temp = wc.innerHTML;
      wshrc.push(temp);
    }

    for(i=0;i<len;i++)
    {
        if(wshrc[i]=="black")
        {
          wblk= +wblk + ((+wshrno[i])*mf[i]);
        }
        if(wshrc[i]=="nickel")
        {
            wnck= +wnck+ ((+wshrno[i])*mf[i]);       
        }         
        if(wshrc[i]=="antique")
        {
          wantk= +wantk + ((+wshrno[i])*mf[i]);
        }
    }
  Wsher_Str=new String;
    if(wnck>0){
      Wsher_Str=Wsher_Str+"&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;&nbsp;"+wnck+" Nickel ]";
    }
    if(wblk>0){
     Wsher_Str=Wsher_Str+"&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;&nbsp;"+wblk  +" Black ]";
    }
    if(wantk>0){
     Wsher_Str=Wsher_Str+"&nbsp;&nbsp;&nbsp;&nbsp;[&nbsp;&nbsp;"+wantk  +" Antique ]";
    }

  document.getElementById("Washerr").innerHTML=Wsher_Str; 
}

// --- PIPE --- --- PIPE ---  --- PIPE ---  --- PIPE ---  --- PIPE ---  --- PIPE ---  
function pipe()
{
  pno = new Array;
len = $('[id="pipe_no"]').length;
var counterpipe=0;
for (pn of $('[id="pipe_no"]')) 
  {
    temp = pn.innerHTML;
    pno.push(temp);
  }  

for(i=0;i<len;i++)
  {
      if(pno[i])
      {
        counterpipe= +counterpipe + ((+pno[i])*mf[i]);
      }
  }
pipe_Str=new String;
  if(counterpipe>0){
    pipe_Str=pipe_Str+" [ "+counterpipe+" Pcs ]";
  }

document.getElementById("pipee").innerHTML=pipe_Str;  
}

//-- rvt --  -- rvt --  -- rvt --  -- rvt --  -- rvt --  -- rvt --  -- rvt --  -- rvt --  -- rvt -- 
function rvt()
{
      rivtTyp = new Array;
    rivet_color = new Array;

    rivt1 = new Array;
    rivet_q1 = new Array;

    rivt2 = new Array;
    rivet_q2 = new Array;

    rivt3 = new Array;
    rivet_q3 = new Array;

    rivt4 = new Array;
    rivet_q4 = new Array;

var p_antk5_5=00,p_antk_7=00,p_antk7_5=00,p_antk8_5=00,p_antk_10=00,p_antk_12=00,p_antk_13=00;
var p_blk5_5=00,p_blk_7=00,p_blk7_5=00,p_blk8_5=00,p_blk_10=00,p_blk_12=00,p_blk_13=00;
var p_nck5_5=00,p_nck_7=00,p_nck7_5=00,p_nck8_5=00,p_nck_10=00,p_nck_12=00,p_nck_13=00;

var clc_antk5_5=00,clc_antk_7=00,clc_antk7_5=00,clc_antk8_5=00,clc_antk_10=00,clc_antk_12=00,clc_antk_13=00;
var clc_blk5_5=00,clc_blk_7=00,clc_blk7_5=00,clc_blk8_5=00,clc_blk_10=00,clc_blk_12=00,clc_blk_13=00;
var clc_nck5_5=00,clc_nck_7=00,clc_nck7_5=00,clc_nck8_5=00,clc_nck_10=00,clc_nck_12=00,clc_nck_13=00;

  for (rs1 of $('[id="rivt1"]')) 
  {
    temp = rs1.innerHTML;
    rivt1.push(temp);
  }  
  for (rs2 of $('[id="rivt2"]')) 
  {
    temp = rs2.innerHTML;
    rivt2.push(temp);
  }  
  for (rs3 of $('[id="rivt3"]')) 
  {
    temp = rs3.innerHTML;
    rivt3.push(temp);
  }  
  for (rs4 of $('[id="rivt4"]')) 
  {
    temp = rs4.innerHTML;
    rivt4.push(temp);
  }  
  
  for (rq1 of $('[id="rivet_q1"]')) 
  {
    temp = rq1.innerHTML;
    rivet_q1.push(temp);
  }
  for (rq2 of $('[id="rivet_q2"]')) 
  {
    temp = rq2.innerHTML;
    rivet_q2.push(temp);
  }
  for (rq3 of $('[id="rivet_q3"]')) 
  {
    temp = rq3.innerHTML;
    rivet_q3.push(temp);
  }
  for (rq4 of $('[id="rivet_q4"]')) 
  {
    temp = rq4.innerHTML;
    rivet_q4.push(temp);
  } 


  for (rtyp of $('[id="rivtTyp"]')) 
  {
    temp = rtyp.innerHTML;
    rivtTyp.push(temp);
  }  
  for (rclr of $('[id="rivet_color"]')) 
  {
    temp = rclr.innerHTML;
    rivet_color.push(temp);
  }  



len = $('[id="rivtTyp"]').length;


for(i=0;i<len;i++)
{
// --clc--  --clc--  --clc--  --clc--  --clc--  --clc--  --clc--  --clc--  --clc--  --clc--  --clc-- 

    // --antique--  --antique--  --antique--  --antique--  --antique--  --antique--  --antique--  --antique--  
      if(rivtTyp[i]=="CLC" && rivet_color[i]=="antique")
      {
            // --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1--
            if(rivt1[i]=="5.5" ){
              clc_antk5_5= +clc_antk5_5+ ((+rivet_q1[i])*mf[i]);
            } 
            if(rivt1[i]=="7"){
              clc_antk_7= +clc_antk_7+ ((+rivet_q1[i])*mf[i]);
            } 
            if(rivt1[i]=="7.5"){
              clc_antk7_5= +clc_antk7_5+ ((+rivet_q1[i])*mf[i]);
            }
            if(rivt1[i]=="8.5"){
              clc_antk8_5= +clc_antk8_5+ ((+rivet_q1[i])*mf[i]);
            }
            if(rivt1[i]=="10"){
              clc_antk_10= +clc_antk_10+ ((+rivet_q1[i])*mf[i]);
            }
            if(rivt1[i]=="12"){
              clc_antk_12= +clc_antk_12+ ((+rivet_q1[i])*mf[i]);
            }
            if(rivt1[i]=="13"){
              clc_antk_13= +clc_antk_13+ ((+rivet_q1[i])*mf[i]);
            }
            // --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2--
            if(rivt2[i]=="5.5" ){
              clc_antk5_5= +clc_antk5_5+ ((+rivet_q2[i])*mf[i]);
            } 
            if(rivt2[i]=="7"){
              clc_antk_7= +clc_antk_7+ ((+rivet_q2[i])*mf[i]);
            }
            if(rivt2[i]=="7.5"){
              clc_antk7_5= +clc_antk7_5+ ((+rivet_q2[i])*mf[i]);
            }
            if(rivt2[i]=="8.5"){
              clc_antk8_5= +clc_antk8_5+ ((+rivet_q2[i])*mf[i]);
            }
            if(rivt2[i]=="10"){
              clc_antk_10= +clc_antk_10+ ((+rivet_q2[i])*mf[i]);
            }
            if(rivt2[i]=="12"){
              clc_antk_12= +clc_antk_12+ ((+rivet_q2[i])*mf[i]);
            }
            if(rivt2[i]=="13"){
              clc_antk_13= +clc_antk_13+ ((+rivet_q2[i])*mf[i]);
            }
            // --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3--
            if(rivt3[i]=="5.5" ){
              clc_antk5_5= +clc_antk5_5+ ((+rivet_q3[i])*mf[i]);
            } 
            if(rivt3[i]=="7"){
              clc_antk_7= +clc_antk_7+ ((+rivet_q3[i])*mf[i]);
            }
            if(rivt3[i]=="7.5"){
              clc_antk7_5= +clc_antk7_5+ ((+rivet_q3[i])*mf[i]);
            }
            if(rivt3[i]=="8.5"){
              clc_antk8_5= +clc_antk8_5+ ((+rivet_q3[i])*mf[i]);
            }
            if(rivt3[i]=="10"){
              clc_antk_10= +clc_antk_10+ ((+rivet_q3[i])*mf[i]);
            }
            if(rivt3[i]=="12"){
              clc_antk_12= +clc_antk_12+ ((+rivet_q3[i])*mf[i]);
            }
            if(rivt3[i]=="13"){
              clc_antk_13= +clc_antk_13+ ((+rivet_q3[i])*mf[i]);
            }
            // --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4--
            if(rivt4[i]=="5.5" ){
              clc_antk5_5= +clc_antk5_5+ ((+rivet_q4[i])*mf[i]);
            } 
            if(rivt4[i]=="7"){
              clc_antk_7= +clc_antk_7+ ((+rivet_q4[i])*mf[i]);
            }
            if(rivt4[i]=="7.5"){
              clc_antk7_5= +clc_antk7_5+ ((+rivet_q4[i])*mf[i]);
            }
            if(rivt4[i]=="8.5"){
              clc_antk8_5= +clc_antk8_5+ ((+rivet_q4[i])*mf[i]);
            }
            if(rivt4[i]=="10"){
              clc_antk_10= +clc_antk_10+ ((+rivet_q4[i])*mf[i]);
            }
            if(rivt4[i]=="12"){
              clc_antk_12= +clc_antk_12+ ((+rivet_q4[i])*mf[i]);
            }
            if(rivt4[i]=="13"){
              clc_antk_13= +clc_antk_13+ ((+rivet_q4[i])*mf[i]);
            }
           
      }

    // --black--  --black--  --black--  --black--  --black--  --black--  --black--  --black--  
      else if(rivtTyp[i]=="CLC" && rivet_color[i]=="black")
      {
            // --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1--
            if(rivt1[i]=="5.5" ){
              clc_blk5_5= +clc_blk5_5+ ((+rivet_q1[i])*mf[i]);
            } 
            if(rivt1[i]=="7"){
              clc_blk_7= +clc_blk_7+ ((+rivet_q1[i])*mf[i]);
            } 
            if(rivt1[i]=="7.5"){
              clc_blk7_5= +clc_blk_7+ ((+rivet_q1[i])*mf[i]);
            }
            if(rivt1[i]=="8.5"){
              clc_blk8_5= +clc_blk8_5+ ((+rivet_q1[i])*mf[i]);   
            }
            if(rivt1[i]=="10"){
              clc_blk_10= +clc_blk_10+ ((+rivet_q1[i])*mf[i]);                 
            }
            if(rivt1[i]=="12"){
              clc_blk_12= +clc_blk_12+ ((+rivet_q1[i])*mf[i]);                 
            }
            if(rivt1[i]=="13"){
              clc_blk_13= +clc_blk_13+ ((+rivet_q1[i])*mf[i]); 
            }
            // --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2--
            if(rivt2[i]=="5.5" ){
              clc_blk5_5= +clc_blk5_5+ ((+rivet_q2[i])*mf[i]);   
            } 
            if(rivt2[i]=="7"){
              clc_blk_7= +clc_blk_7+ ((+rivet_q2[i])*mf[i]);   
            } 
            if(rivt2[i]=="7.5"){
              clc_blk7_5= +clc_blk_7+ ((+rivet_q2[i])*mf[i]);   
            }
            if(rivt2[i]=="8.5"){
              clc_blk8_5= +clc_blk8_5+ ((+rivet_q2[i])*mf[i]);   
            }
            if(rivt2[i]=="10"){
              clc_blk_10= +clc_blk_10+ ((+rivet_q2[i])*mf[i]);                 
            }
            if(rivt2[i]=="12"){
              clc_blk_12= +clc_blk_12+ ((+rivet_q2[i])*mf[i]);                 
            }
            if(rivt2[i]=="13"){
              clc_blk_13= +clc_blk_13+ ((+rivet_q2[i])*mf[i]); 
            }
            // --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3--
            if(rivt3[i]=="5.5" ){
              clc_blk5_5= +clc_blk5_5+ ((+rivet_q3[i])*mf[i]);   
            } 
            if(rivt3[i]=="7"){
              clc_blk_7= +clc_blk_7+ ((+rivet_q3[i])*mf[i]);   
            } 
            if(rivt3[i]=="7.5"){
              clc_blk7_5= +clc_blk_7+ ((+rivet_q3[i])*mf[i]);   
            }
            if(rivt3[i]=="8.5"){
              clc_blk8_5= +clc_blk8_5+ ((+rivet_q3[i])*mf[i]);   
            }
            if(rivt3[i]=="10"){
              clc_blk_10= +clc_blk_10+ ((+rivet_q3[i])*mf[i]);                 
            }
            if(rivt3[i]=="12"){
              clc_blk_12= +clc_blk_12+ ((+rivet_q3[i])*mf[i]);                 
            }
            if(rivt3[i]=="13"){
              clc_blk_13= +clc_blk_13+ ((+rivet_q3[i])*mf[i]); 
            }
            // --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4--
            if(rivt4[i]=="5.5" ){
              clc_blk5_5= +clc_blk5_5+ ((+rivet_q4[i])*mf[i]);   
            } 
            if(rivt4[i]=="7"){
              clc_blk_7= +clc_blk_7+ ((+rivet_q4[i])*mf[i]);   
            } 
            if(rivt4[i]=="7.5"){
              clc_blk7_5= +clc_blk_7+ ((+rivet_q4[i])*mf[i]);   
            }
            if(rivt4[i]=="8.5"){
              clc_blk8_5= +clc_blk8_5+ ((+rivet_q4[i])*mf[i]);   
            }
            if(rivt4[i]=="10"){
              clc_blk_10= +clc_blk_10+ ((+rivet_q4[i])*mf[i]);                 
            }
            if(rivt4[i]=="12"){
              clc_blk_12= +clc_blk_12+ ((+rivet_q4[i])*mf[i]);                 
            }
            if(rivt4[i]=="13"){
              clc_blk_13= +clc_blk_13+ ((+rivet_q4[i])*mf[i]); 
            }
           
      }

// --nickel--  --nickel--  --nickel--  --nickel--  --nickel--  --nickel--  --nickel--  --nickel--  
      else if(rivtTyp[i]=="CLC" && rivet_color[i]=="nickel")
      {
            // --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1--
            if(rivt1[i]=="5.5" ){
              clc_nck5_5= +clc_nck5_5+ ((+rivet_q1[i])*mf[i]);   
            } 
            if(rivt1[i]=="7"){
              clc_nck_7= +clc_nck_7+ ((+rivet_q1[i])*mf[i]);   
            } 
            if(rivt1[i]=="7.5"){
              clc_nck7_5= +clc_nck_7+ ((+rivet_q1[i])*mf[i]);   
            }
            if(rivt1[i]=="8.5"){
              clc_nck8_5= +clc_nck8_5+ ((+rivet_q1[i])*mf[i]);   
            }
            if(rivt1[i]=="10"){
              clc_nck_10= +clc_nck_10+ ((+rivet_q1[i])*mf[i]);                 
            }
            if(rivt1[i]=="12"){
              clc_nck_12= +clc_nck_12+ ((+rivet_q1[i])*mf[i]);                 
            }
            if(rivt1[i]=="13"){
              clc_nck_13= +clc_nck_13+ ((+rivet_q1[i])*mf[i]); 
            }
            // --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2--
            if(rivt2[i]=="5.5" ){
              clc_nck5_5= +clc_nck5_5+ ((+rivet_q2[i])*mf[i]);   
            } 
            if(rivt2[i]=="7"){
              clc_nck_7= +clc_nck_7+ ((+rivet_q2[i])*mf[i]);   
            } 
            if(rivt2[i]=="7.5"){
              clc_nck7_5= +clc_nck_7+ ((+rivet_q2[i])*mf[i]);   
            }
            if(rivt2[i]=="8.5"){
              clc_nck8_5= +clc_nck8_5+ ((+rivet_q2[i])*mf[i]);   
            }
            if(rivt2[i]=="10"){
              clc_nck_10= +clc_nck_10+ ((+rivet_q2[i])*mf[i]);                 
            }
            if(rivt2[i]=="12"){
              clc_nck_12= +clc_nck_12+ ((+rivet_q2[i])*mf[i]);                 
            }
            if(rivt2[i]=="13"){
              clc_nck_13= +clc_nck_13+ ((+rivet_q2[i])*mf[i]); 
            }
            // --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3--
            if(rivt3[i]=="5.5" ){
              clc_nck5_5= +clc_nck5_5+ ((+rivet_q3[i])*mf[i]);   
            } 
            if(rivt3[i]=="7"){
              clc_nck_7= +clc_nck_7+ ((+rivet_q3[i])*mf[i]);   
            } 
            if(rivt3[i]=="7.5"){
              clc_nck7_5= +clc_nck_7+ ((+rivet_q3[i])*mf[i]);   
            }
            if(rivt3[i]=="8.5"){
              clc_nck8_5= +clc_nck8_5+ ((+rivet_q3[i])*mf[i]);   
            }
            if(rivt3[i]=="10"){
              clc_nck_10= +clc_nck_10+ ((+rivet_q3[i])*mf[i]);                 
            }
            if(rivt3[i]=="12"){
              clc_nck_12= +clc_nck_12+ ((+rivet_q3[i])*mf[i]);                 
            }
            if(rivt3[i]=="13"){
              clc_nck_13= +clc_nck_13+ ((+rivet_q3[i])*mf[i]); 
            }
            // --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4--
            if(rivt4[i]=="5.5" ){
              clc_nck5_5= +clc_nck5_5+ ((+rivet_q4[i])*mf[i]);   
            } 
            if(rivt4[i]=="7"){
              clc_nck_7= +clc_nck_7+ ((+rivet_q4[i])*mf[i]);   
            } 
            if(rivt4[i]=="7.5"){
              clc_nck7_5= +clc_nck_7+ ((+rivet_q4[i])*mf[i]);   
            }
            if(rivt4[i]=="8.5"){
              clc_nck8_5= +clc_nck8_5+ ((+rivet_q4[i])*mf[i]);   
            }
            if(rivt4[i]=="10"){
              clc_nck_10= +clc_nck_10+ ((+rivet_q4[i])*mf[i]);                 
            }
            if(rivt4[i]=="12"){
              clc_nck_12= +clc_nck_12+ ((+rivet_q4[i])*mf[i]);                 
            }
            if(rivt4[i]=="13"){
              clc_nck_13= +clc_nck_13+ ((+rivet_q4[i])*mf[i]); 
            }
           
      }


// --plain--  --plain--  --plain--  --plain--  --plain--  --plain--  --plain--  --plain--  --plain-- 

    // --nickel--  --nickel--  --nickel--  --nickel--  --nickel--  --nickel--  --nickel-- 

      else if(rivtTyp[i]=="PLAIN" && rivet_color[i]=="nickel")
      {
            // --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1--
            if(rivt1[i]=="5.5" ){
              p_nck5_5= +p_nck5_5+ ((+rivet_q1[i])*mf[i]);   
            } 
            if(rivt1[i]=="7"){
              p_nck_7= +p_nck_7+ ((+rivet_q1[i])*mf[i]);   
            } 
            if(rivt1[i]=="7.5"){
              p_nck7_5= +p_nck_7+ ((+rivet_q1[i])*mf[i]);   
            }
            if(rivt1[i]=="8.5"){
              p_nck8_5= +p_nck8_5+ ((+rivet_q1[i])*mf[i]);   
            }
            if(rivt1[i]=="10"){
              p_nck_10= +p_nck_10+ ((+rivet_q1[i])*mf[i]);                 
            }
            if(rivt1[i]=="12"){
              p_nck_12= +p_nck_12+ ((+rivet_q1[i])*mf[i]);                 
            }
            if(rivt1[i]=="13"){
              p_nck_13= +p_nck_13+ ((+rivet_q1[i])*mf[i]); 
            }
            // --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2--
            if(rivt2[i]=="5.5" ){
              p_nck5_5= +p_nck5_5+ ((+rivet_q2[i])*mf[i]);   
            } 
            if(rivt2[i]=="7"){
              p_nck_7= +p_nck_7+ ((+rivet_q2[i])*mf[i]);   
            } 
            if(rivt2[i]=="7.5"){
              p_nck7_5= +p_nck_7+ ((+rivet_q2[i])*mf[i]);   
            }
            if(rivt2[i]=="8.5"){
              p_nck8_5= +p_nck8_5+ ((+rivet_q2[i])*mf[i]);   
            }
            if(rivt2[i]=="10"){
              p_nck_10= +p_nck_10+ ((+rivet_q2[i])*mf[i]);                 
            }
            if(rivt2[i]=="12"){
              p_nck_12= +p_nck_12+ ((+rivet_q2[i])*mf[i]);                 
            }
            if(rivt2[i]=="13"){
              p_nck_13= +p_nck_13+ ((+rivet_q2[i])*mf[i]); 
            }
            // --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3--
            if(rivt3[i]=="5.5" ){
              p_nck5_5= +p_nck5_5+ ((+rivet_q3[i])*mf[i]);   
            } 
            if(rivt3[i]=="7"){
              p_nck_7= +p_nck_7+ ((+rivet_q3[i])*mf[i]);   
            } 
            if(rivt3[i]=="7.5"){
              p_nck7_5= +p_nck_7+ ((+rivet_q3[i])*mf[i]);   
            }
            if(rivt3[i]=="8.5"){
              p_nck8_5= +p_nck8_5+ ((+rivet_q3[i])*mf[i]);   
            }
            if(rivt3[i]=="10"){
              p_nck_10= +p_nck_10+ ((+rivet_q3[i])*mf[i]);                 
            }
            if(rivt3[i]=="12"){
              p_nck_12= +p_nck_12+ ((+rivet_q3[i])*mf[i]);                 
            }
            if(rivt3[i]=="13"){
              p_nck_13= +p_nck_13+ ((+rivet_q3[i])*mf[i]); 
            }
            // --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4--
            if(rivt4[i]=="5.5" ){
              p_nck5_5= +p_nck5_5+ ((+rivet_q4[i])*mf[i]);   
            } 
            if(rivt4[i]=="7"){
              p_nck_7= +p_nck_7+ ((+rivet_q4[i])*mf[i]);   
            } 
            if(rivt4[i]=="7.5"){
              p_nck7_5= +p_nck_7+ ((+rivet_q4[i])*mf[i]);   
            }
            if(rivt4[i]=="8.5"){
              p_nck8_5= +p_nck8_5+ ((+rivet_q4[i])*mf[i]);   
            }
            if(rivt4[i]=="10"){
              p_nck_10= +p_nck_10+ ((+rivet_q4[i])*mf[i]);                 
            }
            if(rivt4[i]=="12"){
              p_nck_12= +p_nck_12+ ((+rivet_q4[i])*mf[i]);                 
            }
            if(rivt4[i]=="13"){
              p_nck_13= +p_nck_13+ ((+rivet_q4[i])*mf[i]); 
            }
           
      }

    // --black--  --black--  --black--  --black--  --black--  --black--  --black--  --black--  
      else if(rivtTyp[i]=="PLAIN" && rivet_color[i]=="black")
      {
            // --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1--
            if(rivt1[i]=="5.5" ){
              p_blk5_5= +p_blk5_5+ ((+rivet_q1[i])*mf[i]);   
            } 
            if(rivt1[i]=="7"){
              p_blk_7= +p_blk_7+ ((+rivet_q1[i])*mf[i]);   
            } 
            if(rivt1[i]=="7.5"){
              p_blk7_5= +p_blk_7+ ((+rivet_q1[i])*mf[i]);   
            }
            if(rivt1[i]=="8.5"){
              p_blk8_5= +p_blk8_5+ ((+rivet_q1[i])*mf[i]);   
            }
            if(rivt1[i]=="10"){
              p_blk_10= +p_blk_10+ ((+rivet_q1[i])*mf[i]);                 
            }
            if(rivt1[i]=="12"){
              p_blk_12= +p_blk_12+ ((+rivet_q1[i])*mf[i]);                 
            }
            if(rivt1[i]=="13"){
              p_blk_13= +p_blk_13+ ((+rivet_q1[i])*mf[i]); 
            }
            // --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2--
            if(rivt2[i]=="5.5" ){
              p_blk5_5= +p_blk5_5+ ((+rivet_q2[i])*mf[i]);   
            } 
            if(rivt2[i]=="7"){
              p_blk_7= +p_blk_7+ ((+rivet_q2[i])*mf[i]);   
            } 
            if(rivt2[i]=="7.5"){
              p_blk7_5= +p_blk_7+ ((+rivet_q2[i])*mf[i]);   
            }
            if(rivt2[i]=="8.5"){
              p_blk8_5= +p_blk8_5+ ((+rivet_q2[i])*mf[i]);   
            }
            if(rivt2[i]=="10"){
              p_blk_10= +p_blk_10+ ((+rivet_q2[i])*mf[i]);                 
            }
            if(rivt2[i]=="12"){
              p_blk_12= +p_blk_12+ ((+rivet_q2[i])*mf[i]);                 
            }
            if(rivt2[i]=="13"){
              p_blk_13= +p_blk_13+ ((+rivet_q2[i])*mf[i]); 
            }
            // --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3--
            if(rivt3[i]=="5.5" ){
              p_blk5_5= +p_blk5_5+ ((+rivet_q3[i])*mf[i]);   
            } 
            if(rivt3[i]=="7"){
              p_blk_7= +p_blk_7+ ((+rivet_q3[i])*mf[i]);   
            } 
            if(rivt3[i]=="7.5"){
              p_blk7_5= +p_blk_7+ ((+rivet_q3[i])*mf[i]);   
            }
            if(rivt3[i]=="8.5"){
              p_blk8_5= +p_blk8_5+ ((+rivet_q3[i])*mf[i]);   
            }
            if(rivt3[i]=="10"){
              p_blk_10= +p_blk_10+ ((+rivet_q3[i])*mf[i]);                 
            }
            if(rivt3[i]=="12"){
              p_blk_12= +p_blk_12+ ((+rivet_q3[i])*mf[i]);                 
            }
            if(rivt3[i]=="13"){
              p_blk_13= +p_blk_13+ ((+rivet_q3[i])*mf[i]); 
            }
            // --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4--
            if(rivt4[i]=="5.5" ){
              p_blk5_5= +p_blk5_5+ ((+rivet_q4[i])*mf[i]);   
            } 
            if(rivt4[i]=="7"){
              p_blk_7= +p_blk_7+ ((+rivet_q4[i])*mf[i]);   
            } 
            if(rivt4[i]=="7.5"){
              p_blk7_5= +p_blk_7+ ((+rivet_q4[i])*mf[i]);   
            }
            if(rivt4[i]=="8.5"){
              p_blk8_5= +p_blk8_5+ ((+rivet_q4[i])*mf[i]);   
            }
            if(rivt4[i]=="10"){
              p_blk_10= +p_blk_10+ ((+rivet_q4[i])*mf[i]);                 
            }
            if(rivt4[i]=="12"){
              p_blk_12= +p_blk_12+ ((+rivet_q4[i])*mf[i]);                 
            }
            if(rivt4[i]=="13"){
              p_blk_13= +p_blk_13+ ((+rivet_q4[i])*mf[i]); 
            }
           
      }
    // --antique--  --antique--  --antique--  --antique--  --antique--  --antique--  --antique--  
     else if(rivtTyp[i]=="PLAIN" && rivet_color[i]=="antique")
      {
            // --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1-- --R1--
            if(rivt1[i]=="5.5" ){
              p_antk5_5= +p_antk5_5+ ((+rivet_q1[i])*mf[i]);   
            } 
            if(rivt1[i]=="7"){
              p_antk_7= +p_antk_7+ ((+rivet_q1[i])*mf[i]);   
            } 
            if(rivt1[i]=="7.5"){
              p_antk7_5= +p_antk_7+ ((+rivet_q1[i])*mf[i]);   
            }
            if(rivt1[i]=="8.5"){
              p_antk8_5= +p_antk8_5+ ((+rivet_q1[i])*mf[i]);   
            }
            if(rivt1[i]=="10"){
              p_antk_10= +p_antk_10+ ((+rivet_q1[i])*mf[i]);                 
            }
            if(rivt1[i]=="12"){
              p_antk_12= +p_antk_12+ ((+rivet_q1[i])*mf[i]);                 
            }
            if(rivt1[i]=="13"){
              p_antk_13= +p_antk_13+ ((+rivet_q1[i])*mf[i]); 
            }
            // --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2-- --R2--
            if(rivt2[i]=="5.5" ){
              p_antk5_5= +p_antk5_5+ ((+rivet_q2[i])*mf[i]);   
            } 
            if(rivt2[i]=="7"){
              p_antk_7= +p_antk_7+ ((+rivet_q2[i])*mf[i]);   
            } 
            if(rivt2[i]=="7.5"){
              p_antk7_5= +p_antk_7+ ((+rivet_q2[i])*mf[i]);   
            }
            if(rivt2[i]=="8.5"){
              p_antk8_5= +p_antk8_5+ ((+rivet_q2[i])*mf[i]);   
            }
            if(rivt2[i]=="10"){
              p_antk_10= +p_antk_10+ ((+rivet_q2[i])*mf[i]);                 
            }
            if(rivt2[i]=="12"){
              p_antk_12= +p_antk_12+ ((+rivet_q2[i])*mf[i]);                 
            }
            if(rivt2[i]=="13"){
              p_antk_13= +p_antk_13+ ((+rivet_q2[i])*mf[i]); 
            }
            // --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3-- --R3--
            if(rivt3[i]=="5.5" ){
              p_antk5_5= +p_antk5_5+ ((+rivet_q3[i])*mf[i]);   
            } 
            if(rivt3[i]=="7"){
              p_antk_7= +p_antk_7+ ((+rivet_q3[i])*mf[i]);   
            } 
            if(rivt3[i]=="7.5"){
              p_antk7_5= +p_antk_7+ ((+rivet_q3[i])*mf[i]);   
            }
            if(rivt3[i]=="8.5"){
              p_antk8_5= +p_antk8_5+ ((+rivet_q3[i])*mf[i]);   
            }
            if(rivt3[i]=="10"){
              p_antk_10= +p_antk_10+ ((+rivet_q3[i])*mf[i]);                 
            }
            if(rivt3[i]=="12"){
              p_antk_12= +p_antk_12+ ((+rivet_q3[i])*mf[i]);                 
            }
            if(rivt3[i]=="13"){
              p_antk_13= +p_antk_13+ ((+rivet_q3[i])*mf[i]); 
            }
            // --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4-- --R4--
            if(rivt4[i]=="5.5" ){
              p_antk5_5= +p_antk5_5+ ((+rivet_q4[i])*mf[i]);   
            } 
            if(rivt4[i]=="7"){
              p_antk_7= +p_antk_7+ ((+rivet_q4[i])*mf[i]);   
            } 
            if(rivt4[i]=="7.5"){
              p_antk7_5= +p_antk7_5+ ((+rivet_q4[i])*mf[i]);   
            }
            if(rivt4[i]=="8.5"){
              p_antk8_5= +p_antk8_5+ ((+rivet_q4[i])*mf[i]);   
            }
            if(rivt4[i]=="10"){
              p_antk_10= +p_antk_10+ ((+rivet_q4[i])*mf[i]);                 
            }
            if(rivt4[i]=="12"){
              p_antk_12= +p_antk_12+ ((+rivet_q4[i])*mf[i]);                 
            }
            if(rivt4[i]=="13"){
              p_antk_13= +p_antk_13+ ((+rivet_q4[i])*mf[i]); 
            }
           
      }
}  //for

Rivet_Str=new String;
//  clc   clc   clc   clc   clc   clc   clc   clc   clc   clc   clc   clc   clc 
if(clc_nck5_5>0 || clc_nck_7>0 || clc_nck7_5>0 || clc_nck8_5>0 || clc_nck_10>0 || clc_nck_12>0 || clc_nck_13>0 || clc_blk5_5>0 || clc_blk_7>0 || clc_blk7_5>0 || clc_blk8_5>0 || clc_blk_10>0 || clc_blk_12>0 || clc_blk_13>0 || clc_antk5_5>0 || clc_antk_7>0 || clc_antk7_5>0 || clc_antk8_5>0 || clc_antk_10>0 || clc_antk_12>0 || clc_antk_13>0)
{ 
  Rivet_Str=Rivet_Str+"<center><b>Branded [CLC]</b></center> ";
  // Nickel  Nickel  Nickel  Nickel  Nickel  Nickel  Nickel  Nickel  Nickel 
  if(clc_nck5_5>0 || clc_nck_7>0 || clc_nck7_5>0 || clc_nck8_5>0 || clc_nck_10>0 || clc_nck_12>0 || clc_nck_13>0)
  {
    Rivet_Str=Rivet_Str+"<hr><b>Nickel</b>  ";
    if(clc_nck5_5>0){
      Rivet_Str=Rivet_Str+" [ "+clc_nck5_5+" Pcs of 5.5 ]";
    }
    if(clc_nck_7>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_nck_7+" Pcs Of 7 ]";
    }
    if(clc_nck7_5>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_nck7_5+" Pcs Of 7.5 ]";
    }
    if(clc_nck8_5>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_nck8_5+" Pcs Of 8.5 ]";
    }
    if(clc_nck_10>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_nck_10+" Pcs Of 10 ]";
    }
    if(clc_nck_12>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_nck_12+" Pcs Of 12 ]";
    }
    if(clc_nck_13>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_nck_13+" Pcs Of 13 ]";
    }

  }
  // Black  Black  Black  Black  Black  Black  Black  Black  Black  Black  Black  Black 
  if(clc_blk5_5>0 || clc_blk_7>0 || clc_blk7_5>0 || clc_blk8_5>0 || clc_blk_10>0 || clc_blk_12>0 || clc_blk_13>0)
  {
    Rivet_Str=Rivet_Str+"<hr><b>Black</b>  ";
    if(clc_blk5_5>0){
      Rivet_Str=Rivet_Str+" [ "+clc_blk5_5+" Pcs of 5.5 ]";
    }
    if(clc_blk_7>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_blk_7+" Pcs Of 7 ]";
    }
    if(clc_blk7_5>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_blk7_5+" Pcs Of 7.5 ]";
    }
    if(clc_blk8_5>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_blk8_5+" Pcs Of 8.5 ]";
    }
    if(clc_blk_10>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_blk_10+" Pcs Of 10 ]";
    }

    if(clc_blk_12>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_blk_12+" Pcs Of 12 ]";
    }

    if(clc_blk_13>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_blk_13+" Pcs Of 13 ]";
    }

  }
  // Antique Antique  Antique  Antique  Antique  Antique  Antique  Antique  Antique  Antique  Antique 
  if(clc_antk5_5>0 || clc_antk_7>0 || clc_antk7_5>0 || clc_antk8_5>0 || clc_antk_10>0 || clc_antk_12>0 || clc_antk_13>0)
  {
    Rivet_Str=Rivet_Str+"<hr><b>Antique</b>  ";
    if(clc_antk5_5>0){
      Rivet_Str=Rivet_Str+" [ "+clc_antk5_5+" Pcs of 5.5 ]";
    }
    if(clc_antk_7>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_antk_7+" Pcs Of 7 ]";
    }
    if(clc_antk7_5>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_antk7_5+" Pcs Of 7.5 ]";
    }
    if(clc_antk8_5>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_antk8_5+" Pcs Of 8.5 ]";
    }

    if(clc_antk_10>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_antk_10+" Pcs Of 10 ]";
    }
    if(clc_antk_12>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_antk_12+" Pcs Of 12 ]";
    }

    if(clc_antk_13>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+clc_antk_13+" Pcs Of 13 ]";
    }

  }
}
//  Plain  Plain   Plain   Plain   Plain   Plain   Plain   Plain   Plain   Plain   Plain   Plain 
if(p_nck5_5>0 || p_nck_7>0 || p_nck7_5>0 || p_nck8_5>0 || p_nck_10>0 || p_nck_12>0 || p_nck_13>0 || p_blk5_5>0 || p_blk_7>0 || p_blk7_5>0 || p_blk8_5>0 || p_blk_10>0 || p_blk_12>0 || p_blk_13>0 || p_antk5_5>0 || p_antk_7>0 || p_antk7_5>0 || p_antk8_5>0 || p_antk_10>0 || p_antk_12>0 || p_antk_13>0)
{
  Rivet_Str=Rivet_Str+"<br><br><center><b>Plain</b><center> ";
  // Nickel  Nickel  Nickel  Nickel  Nickel  Nickel  Nickel  Nickel  Nickel 
  if(p_nck5_5>0 || p_nck_7>0 || p_nck7_5>0 || p_nck8_5>0 || p_nck_10>0 | p_nck_12>0 || p_nck_13>0)
  {
    Rivet_Str=Rivet_Str+"<hr><b>Nickel</b>  ";
    if(p_nck5_5>0){
      Rivet_Str=Rivet_Str+" [ "+p_nck5_5+" Pcs of 5.5 ]";
    }
    if(p_nck_7>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_nck_7+" Pcs Of 7 ]";
    }
    if(p_nck7_5>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_nck7_5+" Pcs Of 7.5 ]";
    }
    if(p_nck8_5>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_nck8_5+" Pcs Of 8.5 ]";
    }

    if(p_nck_10>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_nck_10+" Pcs Of 10 ]";
    }

    if(p_nck_12>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_nck_12+" Pcs Of 12 ]";
    }

    if(p_nck_13>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_nck_13+" Pcs Of 13 ]";
    }

  }
  // Black  Black  Black  Black  Black  Black  Black  Black  Black  Black  Black  Black 
  if(p_blk5_5>0 || p_blk_7>0 || p_blk7_5>0 || p_blk8_5>0 || p_blk_10>0  || p_blk_12>0 || p_blk_13>0)
  {
    Rivet_Str=Rivet_Str+"<hr><b>Black</b>  ";
    if(p_blk5_5>0){
      Rivet_Str=Rivet_Str+" [ "+p_blk5_5+" Pcs of 5.5 ]";
    }
    if(p_blk_7>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_blk_7+" Pcs Of 7 ]";
    }
    if(p_blk7_5>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_blk7_5+" Pcs Of 7.5 ]";
    }
    if(p_blk8_5>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_blk8_5+" Pcs Of 8.5 ]";
    }

    if(p_blk_10>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_blk_10+" Pcs Of 10 ]";
    }
    if(p_blk_12>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_blk_12+" Pcs Of 12 ]";
    }

    if(p_blk_13>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_blk_13+" Pcs Of 13 ]";
    }

  }
  // Antique Antique  Antique  Antique  Antique  Antique  Antique  Antique  Antique  Antique  Antique 
  if(p_antk5_5>0 || p_antk_7>0 || p_antk8_5>0 || p_antk_10>0 || p_antk_12>0 || p_antk_13>0)
  {
    Rivet_Str=Rivet_Str+"<hr><b>Antique</b>  ";
    if(p_antk5_5>0){
      Rivet_Str=Rivet_Str+" [ "+p_antk5_5+" Pcs of 5.5 ]";
    }
    if(p_antk_7>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_antk_7+" Pcs Of 7 ]";
    }
    if(p_antk7_5>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_antk7_5+" Pcs Of 7.5 ]";
    }
    if(p_antk8_5>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_antk8_5+" Pcs Of 8.5 ]";
    }

    if(p_antk_10>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_antk_10+" Pcs Of 10 ]";
    }

    if(p_antk_12>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_antk_12+" Pcs Of 12 ]";
    }

    if(p_antk_13>0){
      Rivet_Str=Rivet_Str+"&nbsp;&nbsp;&nbsp;&nbsp; & &nbsp;&nbsp;&nbsp;&nbsp;[ "+p_antk_13+" Pcs Of 13 ]";
    }

  }
}
  document.getElementById("rivett").innerHTML = Rivet_Str;
}

//--- buckel ---  --- buckel ---  --- buckel ---  --- buckel ---  --- buckel ---  
function bkl()
{
  bno = new Array;
  bt = new Array;
  bc= new Array;
  var antk3pc=0,blk3pc=0,nck3pc=0;
  var antkd2=0,blkd2=0,nckd2=0;
  var antksp=0,blksp=0,ncksp=0;
  var antksp34=0,blksp34=0,ncksp34=0;
  var antk2pb=0,blk2pb=0,nck2pb=0;
  var antkkri=0,blkkri=0,nckkri=0;
  var A1_4_HvyMtlHk=0,B1_4_HvyMtlHk=0,N1_4_HvyMtlHk=0;
  var A1_2_SPRoller=0,B1_2_SPRoller=0,N1_2_SPRoller=0;
  var A3_4_Box=0,B3_4_Box=0,N3_4_Box=0;
  var AKeePad=0,BKeePad=0,NKeePad=0;
  var AKeePad_3_4=0,BKeePad_3_4=0,NKeePad_3_4=0;
  len = $('[id="buckel_no"]').length;
    
    for (wn of $('[id="buckel_no"]')) 
    {
      temp = wn.innerHTML;
      bno.push(temp);
    }  

    for (ws of $('[id="buckel_typ"]')) 
    {
      temp = ws.innerHTML;
      bt.push(temp);
    }

    for (wc of $('[id="buckel_color"]')) 
    {
      temp = wc.innerHTML;
      bc.push(temp);
    }

    for(i=0;i<len;i++)
    {
        //--BKL 2¼' METAL- 3 PCS SET----BKL 2¼' METAL- 3 PCS SET----BKL 2¼' METAL- 3 PCS SET--
        if(bt[i]=="BKL 2¼' METAL- 3 PCS SET" && bc[i]=="black")
        {
          blk3pc= +blk3pc + ((+bno[i])*mf[i]);
        }
        if(bt[i]=="BKL 2¼' METAL- 3 PCS SET" && bc[i]=="nickel")
        {
            nck3pc= +nck3pc + ((+bno[i])*mf[i]);       
        }         
        if(bt[i]=="BKL 2¼' METAL- 3 PCS SET" && bc[i]=="antique")
        {
          antk3pc= +antk3pc + ((+bno[i])*mf[i]);
        }

        //--ROLLER  D/PIN 2'----ROLLER  D/PIN 2'----ROLLER  D/PIN 2'----ROLLER  D/PIN 2'--
        if(bt[i]=="ROLLER  D/PIN 2'" && bc[i]=="black")
        {
          blkd2= +blkd2 + ((+bno[i])*mf[i]);
        }
        if(bt[i]=="ROLLER  D/PIN 2'" && bc[i]=="nickel")
        {
            nckd2= +nckd2 + ((+bno[i])*mf[i]);
        }         
        if(bt[i]=="ROLLER  D/PIN 2'" && bc[i]=="antique")
        {
          antkd2= +antkd2 + ((+bno[i])*mf[i]);
        }

        //-- ROLLER S/PIN ---- ROLLER S/PIN ---- ROLLER S/PIN ---- ROLLER S/PIN ---- ROLLER S/PIN --
        if(bt[i]=="ROLLER S/PIN" && bc[i]=="black")
        {
          blksp= +blksp + ((+bno[i])*mf[i]);
        }
        if(bt[i]=="ROLLER S/PIN" && bc[i]=="nickel")
        {
            ncksp= +ncksp + (+bno[i])*mf[i] ;
        }         
        if(bt[i]=="ROLLER S/PIN" && bc[i]=="antique")
        {
          antksp= +antksp + ((+bno[i])*mf[i]);
        }


        //-- 3/4' ROLLER S/PIN SET ---- 3/4' ROLLER S/PIN SET ---- 3/4' ROLLER S/PIN SET --
        if(bt[i]=="3/4' ROLLER S/PIN SET" && bc[i]=="black")
        {
          blksp34= +blksp34 + ((+bno[i])*mf[i]);
        }
        if(bt[i]=="3/4' ROLLER S/PIN SET" && bc[i]=="nickel")
        {
            ncksp34= +ncksp34+ ((+bno[i])*mf[i]);
        }         
        if(bt[i]=="3/4' ROLLER S/PIN SET" && bc[i]=="antique")
        {
          antksp34= +antksp34 + ((+bno[i])*mf[i]);
        }


        //-- 2' PB--ME SET ---- 2' PB--ME SET ---- 2' PB--ME SET --
        if(bt[i]=="2' PB--ME SET" && bc[i]=="black")
        {
          blk2pb= +blk2pb + ((+bno[i])*mf[i]);
        }
        if(bt[i]=="2' PB--ME SET" && bc[i]=="nickel")
        {
            nck2pb= +nck2pb+ ((+bno[i])*mf[i]);
        }         
        if(bt[i]=="2' PB--ME SET" && bc[i]=="antique")
        {
          antk2pb= +antk2pb + ((+bno[i])*mf[i]);
        }

        //-- 3/4' KARI ---- 3/4' KARI ---- 3/4' KARI --
        if(bt[i]=="3/4' KARI" && bc[i]=="black")
        {
          blkkri= +blkkri + ((+bno[i])*mf[i]);
        }
        if(bt[i]=="3/4' KARI" && bc[i]=="nickel")
        {
            nckkri= +nckkri+ ((+bno[i])*mf[i]);
        }         
        if(bt[i]=="3/4' KARI" && bc[i]=="antique")
        {
          antkkri= +antkkri + ((+bno[i])*mf[i]);
        }

        //-- 1' S/SPINDEL KNEE-PAD ---- 1' S/SPINDEL KNEE-PAD ---- 1' S/SPINDEL KNEE-PAD --
        if(bt[i]=="1' S/SPINDEL KNEE-PAD" && bc[i]=="black")
        {
          BKeePad= +BKeePad + ((+bno[i])*mf[i]);
        }
        if(bt[i]=="1' S/SPINDEL KNEE-PAD" && bc[i]=="nickel")
        {
            NKeePad= +NKeePad+ ((+bno[i])*mf[i]);
        }         
        if(bt[i]=="1' S/SPINDEL KNEE-PAD" && bc[i]=="antique")
        {
          AKeePad= +AKeePad + ((+bno[i])*mf[i]);
        }
        //-- 3/4' D/SPINDEL KNEE-PAD ---- 3/4' D/SPINDEL KNEE-PAD ---- 3/4' D/SPINDEL KNEE-PAD --
        if(bt[i]=="3/4' D/SPINDEL KNEE-PAD" && bc[i]=="black")
        {
          BKeePad_3_4= +BKeePad_3_4 + ((+bno[i])*mf[i]);
        }
        if(bt[i]=="3/4' D/SPINDEL KNEE-PAD" && bc[i]=="nickel")
        {
            NKeePad_3_4= +NKeePad_3_4+ ((+bno[i])*mf[i]);
        }         
        if(bt[i]=="3/4' D/SPINDEL KNEE-PAD" && bc[i]=="antique")
        {
          AKeePad_3_4= +AKeePad_3_4 + ((+bno[i])*mf[i]);
        }


        //-- 1 3/4' BOX ---- 1 3/4' BOX ---- 1 3/4' BOX --
        if(bt[i]=="1 3/4' BOX" && bc[i]=="black")
        {
          B3_4_Box= +B3_4_Box + ((+bno[i])*mf[i]);
        }
        if(bt[i]=="1 3/4' BOX" && bc[i]=="nickel")
        {
            N3_4_Box= +N3_4_Box+ ((+bno[i])*mf[i]);
        }         
        if(bt[i]=="1 3/4' BOX" && bc[i]=="antique")
        {
          A3_4_Box= +A3_4_Box + ((+bno[i])*mf[i]);
        }


        //-- 1 1/2' S/PIN ROOLER ---- 1 1/2' S/PIN ROOLER ---- 1 1/2' S/PIN ROOLER --
        if(bt[i]=="1 1/2' S/PIN ROOLER" && bc[i]=="black")
        {
          B1_2_SPRoller= +B1_2_SPRoller + ((+bno[i])*mf[i]);
        }
        if(bt[i]=="1 1/2' S/PIN ROOLER" && bc[i]=="nickel")
        {
            N1_2_SPRoller= +N1_2_SPRoller+ ((+bno[i])*mf[i]);
        }         
        if(bt[i]=="1 1/2' S/PIN ROOLER" && bc[i]=="antique")
        {
          A1_2_SPRoller= +A1_2_SPRoller + ((+bno[i])*mf[i]);
        }


        //-- 2 1/4' metal heavy with hook-5pcs  ---- 2 1/4' metal heavy with hook-5pcs --
        if(bt[i]=="2 1/4' metal heavy with hook-5pcs" && bc[i]=="black")
        {
          B1_4_HvyMtlHk= +B1_4_HvyMtlHk + ((+bno[i])*mf[i]);
        }
        if(bt[i]=="2 1/4' metal heavy with hook-5pcs" && bc[i]=="nickel")
        {
            N1_4_HvyMtlHk= +N1_4_HvyMtlHk+ ((+bno[i])*mf[i]);
        }         
        if(bt[i]=="2 1/4' metal heavy with hook-5pcs" && bc[i]=="antique")
        {
          A1_4_HvyMtlHk= +A1_4_HvyMtlHk + ((+bno[i])*mf[i]);
        }

    }
  Bkl_Str=new String;

  if(nck3pc>0 || blk3pc>0 || antk3pc>0)
  {
    Bkl_Str = Bkl_Str + "BKL 2¼' METAL- 3 PCS SET ";
    if(nck3pc>0){
      Bkl_Str = Bkl_Str + "    [ " + nck3pc + " Nickel ]";
    }
    if(blk3pc>0){
     Bkl_Str = Bkl_Str + "    [ " + blk3pc  + " Black ]";
    }
    if(antk3pc>0){
     Bkl_Str = Bkl_Str + "    [ " + antk3pc  +" Antique ]";
    }
  }

  if(nckd2>0 || blkd2>0 || antkd2>0)
  {
    Bkl_Str = Bkl_Str + "<br> ROLLER  D/PIN 2' ";
    if(nckd2>0){
      Bkl_Str = Bkl_Str + "    [ " + nckd2 + " Nickel ]";
    }
    if(blkd2>0){
     Bkl_Str = Bkl_Str + "    [ " + blkd2 + " Black ]";
    }
    if(antkd2>0){
     Bkl_Str = Bkl_Str + "    [ " + antkd2 + " Antique ]";
    }
  }

  if(ncksp>0 || blksp>0 || antksp>0)
  {
    Bkl_Str = Bkl_Str + "<br> ROLLER S/PIN 2' ";
    if(ncksp>0){
      Bkl_Str = Bkl_Str + "    [ " + ncksp + " Nickel ]";
    }
    if(blksp>0){
     Bkl_Str = Bkl_Str + "    [ " + blksp + " Black ]";
    }
    if(antksp>0){
     Bkl_Str = Bkl_Str + "    [ " + antksp + " Antique ]";
    }
  }  
    
  if(ncksp34>0 || blksp34>0 || antksp34>0)
  {
    Bkl_Str = Bkl_Str + "<br> 3/4' ROLLER S/PIN SET ";
    if(ncksp34>0){
      Bkl_Str = Bkl_Str + "    [ " + ncksp34 +" Nickel ]";
    }
    if(blksp34>0){
     Bkl_Str = Bkl_Str + "    [ " + blksp34 +" Black ]";
    }
    if(antksp34>0){
     Bkl_Str = Bkl_Str + "    [ " + antksp34 +" Antique ]";
    }
  }  
    
  if(nck2pb>0 || blk2pb>0 || antk2pb>0)
  {
    Bkl_Str = Bkl_Str + "<br> 2' PB--ME SET ";
    if(nck2pb>0){
      Bkl_Str = Bkl_Str + "    [ " + nck2pb+" Nickel ]";
    }
    if(blk2pb>0){
     Bkl_Str = Bkl_Str + "    [ " + blk2pb +" Black ]";
    }
    if(antk2pb>0){
     Bkl_Str = Bkl_Str + "    [ " + antk2pb +" Antique ]";
    }
  } 

  if(nckkri>0 || blkkri>0 || antkkri>0)
  {
    Bkl_Str = Bkl_Str + "<br> 3/4' KARI ";
    if(nckkri>0){
      Bkl_Str = Bkl_Str + "    [ " + nckkri +" Nickel ]";
    }
    if(blkkri>0){
     Bkl_Str = Bkl_Str + "    [ " + blkkri +" Black ]";
    }
    if(antkkri>0){
     Bkl_Str = Bkl_Str + "    [ " + antkkri +" Antique ]";
    }
  } 
  if(N1_4_HvyMtlHk>0 || B1_4_HvyMtlHk>0 || A1_4_HvyMtlHk>0)
  {
    Bkl_Str = Bkl_Str + "<br> 2 1/4' metal heavy with hook-5pcs ";
    if(N1_4_HvyMtlHk>0){
      Bkl_Str = Bkl_Str + "    [ " + N1_4_HvyMtlHk + " Nickel ]";
    }
    if(B1_4_HvyMtlHk>0){
     Bkl_Str = Bkl_Str + "    [ " + B1_4_HvyMtlHk + " Black ]";
    }
    if(A1_4_HvyMtlHk>0){
     Bkl_Str = Bkl_Str + "    [ " + A1_4_HvyMtlHk + " Antique ]";
    }
  }

  if(N1_2_SPRoller>0 || B1_2_SPRoller>0 || A1_2_SPRoller>0)
  {
    Bkl_Str = Bkl_Str + " <br> 1 1/2' S/PIN ROOLER ";
    if(N1_2_SPRoller>0){
      Bkl_Str = Bkl_Str + "    [ " + N1_2_SPRoller + " Nickel ]";
    }
    if(B1_2_SPRoller>0){
     Bkl_Str = Bkl_Str + "    [ " + B1_2_SPRoller + " Black ]";
    }
    if(A1_2_SPRoller>0){
     Bkl_Str = Bkl_Str + "    [ " + A1_2_SPRoller + " Antique ]";
    }
  }

  if(N3_4_Box>0 || B3_4_Box>0 || A3_4_Box>0)
  {
    Bkl_Str = Bkl_Str + "<br> 1 3/4' BOX ";
    if(N3_4_Box>0){
      Bkl_Str = Bkl_Str + "    [ " + N3_4_Box + " Nickel ]";
    }
    if(B3_4_Box>0){
     Bkl_Str = Bkl_Str + "    [ " + B3_4_Box + " Black ]";
    }
    if(A3_4_Box>0){
     Bkl_Str = Bkl_Str + "    [ " + A3_4_Box  + " Antique ]";
    }
  }

  if(NKeePad>0 || BKeePad>0 || AKeePad>0)
  {
    Bkl_Str = Bkl_Str + "<br> 1' S/SPINDEL KNEE-PAD ";
    if(NKeePad>0){
      Bkl_Str = Bkl_Str +"    [ " + NKeePad + " Nickel ]";
    }
    if(BKeePad>0){
     Bkl_Str = Bkl_Str+ "    [ " + BKeePad  + " Black ]";
    }
    if(AKeePad>0){
     Bkl_Str = Bkl_Str + "    [ " + AKeePad  + " Antique ]";
    }
  }

  if(NKeePad_3_4>0 || BKeePad_3_4>0 || AKeePad_3_4>0)
  {
    Bkl_Str = Bkl_Str + "<br> 3/4' D/SPINDEL KNEE-PAD ";
    if(NKeePad>0){
      Bkl_Str = Bkl_Str + "    [ " + NKeePad_3_4 +" Nickel ]";
    }
    if(BKeePad>0){
     Bkl_Str = Bkl_Str + "    [ " + BKeePad_3_4  +" Black ]";
    }
    if(AKeePad>0){
     Bkl_Str = Bkl_Str + "    [ " + AKeePad_3_4  +" Antique ]";
    }
  }

  document.getElementById("buckl").innerHTML=Bkl_Str;
}


//  -- Zip --    -- Zip --    -- Zip --    -- Zip --    -- Zip --    -- Zip --  
function funZip()
{
  z_q1 = new Array;
  z_t1 = new Array;
  z_q2 = new Array;
  z_t2 = new Array;
  zp_clr = new Array;

   zplen = $('[id="zip_no1"]').length;

    for (zon of $('[id="zip_no1"]')) 
    {
      temp = zon.innerHTML;
      z_q1.push(temp);
    }
    for (typZon of $('[id="zip_typ1"]')) 
    {
      temp = typZon.innerHTML;
      z_t1.push(temp);
    }
    for (ztw of $('[id="zip_no2"]')) 
    {
      temp = ztw.innerHTML;
      z_q2.push(temp);
    }
    for (typZtw of $('[id="zip_typ2"]')) 
    {
      temp = typZtw.innerHTML;
      z_t2.push(temp);
    }
    for (clrzp of $('[id="zip_color"]')) 
    {
      temp = clrzp.innerHTML;
      zp_clr.push(temp);
    }
  
  var numbr5_Blk=0,numbr8_Blk=0,numbr10_Blk=0;
  var numbr5_NvB=0,numbr8_NvB=0,numbr10_NvB=0;

    for(i=0;i<zplen;i++)
    {  

      if(zp_clr[i]==" black ")
      {
          if(z_t1[i]==" number 5 ")
          {
             numbr5_Blk= +numbr5_Blk + ((+z_q1[i])*mf[i]);
          }
          if(z_t2[i]==" number 5 ")
          {
             numbr5_Blk= +numbr5_Blk + ((+z_q2[i])*mf[i]);
          }


          if(z_t1[i]==" number 8 ")
          {
             numbr8_Blk= +numbr8_Blk + ((+z_q1[i])*mf[i]);
          }
          if(z_t2[i]==" number 8 ")
          {
             numbr8_Blk= +numbr8_Blk + ((+z_q2[i])*mf[i]);
          }


          if(z_t1[i]==" number 10 ")
          {
             numbr10_Blk= +numbr10_Blk + ((+z_q1[i])*mf[i]);
          }
          if(z_t2[i]==" number 10 ")
          {
             numbr10_Blk= +numbr10_Blk + ((+z_q2[i])*mf[i]);
          }

      }//ifBlack
      
      if(zp_clr[i]==" navyblue ")
      {
          if(z_t1[i]==" number 5 ")
          {
             numbr5_NvB= +numbr5_NvB + ((+z_q1[i])*mf[i]);
          }
          if(z_t2[i]==" number 5 ")
          {
             numbr5_NvB= +numbr5_NvB + ((+z_q2[i])*mf[i]);
          }


          if(z_t1[i]==" number 8 ")
          {
             numbr8_NvB= +numbr8_NvB + ((+z_q1[i])*mf[i]);
          }
          if(z_t2[i]==" number 8 ")
          {
             numbr8_NvB= +numbr8_NvB + ((+z_q2[i])*mf[i]);
          }


          if(z_t1[i]==" number 10 ")
          {
             numbr10_NvB= +numbr10_NvB + ((+z_q1[i])*mf[i]);
          }
          if(z_t2[i]==" number 10 ")
          {
             numbr10_NvB= +numbr10_NvB + ((+z_q2[i])*mf[i]);
          }

      } //ifBlue
    } //for

    zip_String = new String;
  
  //  -- 5 --    -- 5 --    -- 5 --    -- 5 --    
  if(numbr5_Blk>0 || numbr5_NvB>0 )
  {
    zip_String=zip_String+"5 Number : ";
    if(numbr5_Blk>0)
    {
     zip_String = zip_String + " Black [ " + numbr5_Blk + " ]";
    }
    if(numbr5_NvB>0)
    {
     zip_String = zip_String + "          Nevy Blue [ " + numbr5_NvB + " ]";
    }
  }

  //  -- 8 --    -- 8 --    -- 8 --    -- 8 --    
  if(numbr8_Blk>0 || numbr8_NvB>0 )
  {
    zip_String=zip_String+"<br>8 Number : ";
    if(numbr8_Blk>0)
    {
     zip_String = zip_String + " Black [ " + numbr8_Blk + " ]";
    }
    if(numbr8_NvB>0)
    {
     zip_String = zip_String + "          Nevy Blue [ " + numbr8_NvB + " ]";
    }
  }

  //  -- 10 --    -- 10 --    -- 10 --    -- 10 --    
  if(numbr10_Blk>0 || numbr10_NvB>0 )
  {
    zip_String=zip_String+"<br>10 Number : ";
    if(numbr10_Blk>0)
    {
     zip_String = zip_String + " Black [ " + numbr10_Blk + " ]";
    }
    if(numbr10_NvB>0)
    {
     zip_String = zip_String + "          Nevy Blue [ " + numbr10_NvB + " ]";
    }
  }
  
  document.getElementById("dvzp").innerHTML=zip_String;
}
//  -- runer --    -- runer --    -- runer --    -- runer --    -- runer --    -- runer --  
function funRuner()
{
  r_q1 = new Array;
  r_t1 = new Array;
  r_q2 = new Array;
  r_t2 = new Array;
  rner_clr = new Array;

   rnrlen = $('[id="runner_no1"]').length;

    for (Ron of $('[id="runner_no1"]')) 
    {
      temp = Ron.innerHTML;
      r_q1.push(temp);
    }
    for (typRon of $('[id="runner_typ1"]')) 
    {
      temp = typRon.innerHTML;
      r_t1.push(temp);
    }
    for (Rtw of $('[id="runner_no2"]')) 
    {
      temp = Rtw.innerHTML;
      r_q2.push(temp);
    }
    for (typRtw of $('[id="runner_typ2"]')) 
    {
      temp = typRtw.innerHTML;
      r_t2.push(temp);
    }
    for (clrRp of $('[id="runner_color"]')) 
    {
      temp = clrRp.innerHTML;
      rner_clr.push(temp);
    }
  
  var numbr5Rnr_Blk=0,numbr8Rnr_Blk=0,numbr10Rnr_Blk=0;
  var numbr5Rnr_nkl=0,numbr8Rnr_nkl=0,numbr10Rnr_nkl=0;

    for(i=0;i<rnrlen;i++)
    {  

      if(rner_clr[i]==" black ")
      {
          if(r_t1[i]==" number 5 ")
          {
             numbr5Rnr_Blk= +numbr5Rnr_Blk + ((+r_q1[i])*mf[i]);
          }
          if(r_t2[i]==" number 5 ")
          {
             numbr5Rnr_Blk= +numbr5Rnr_Blk + ((+r_q2[i])*mf[i]);
          }


          if(r_t1[i]==" number 8 ")
          {
             numbr8Rnr_Blk= +numbr8Rnr_Blk + ((+r_q1[i])*mf[i]);
          }
          if(r_t2[i]==" number 8 ")
          {
             numbr8Rnr_Blk= +numbr8Rnr_Blk + ((+r_q2[i])*mf[i]);
          }


          if(r_t1[i]==" number 10 ")
          {
             numbr10Rnr_Blk= +numbr10Rnr_Blk + ((+r_q1[i])*mf[i]);
          }
          if(r_t2[i]==" number 10 ")
          {
             numbr10Rnr_Blk= +numbr10Rnr_Blk + ((+r_q2[i])*mf[i]);
          }

      }//ifBlack
      
      if(rner_clr[i]==" nickel ")
      {
          if(r_t1[i]==" number 5 ")
          {
             numbr5Rnr_nkl= +numbr5Rnr_nkl + ((+r_q1[i])*mf[i]);
          }
          if(r_t2[i]==" number 5 ")
          {
             numbr5Rnr_nkl= +numbr5Rnr_nkl + ((+r_q2[i])*mf[i]);
          }


          if(r_t1[i]==" number 8 ")
          {
             numbr8Rnr_nkl= +numbr8Rnr_nkl + ((+r_q1[i])*mf[i]);
          }
          if(r_t2[i]==" number 8 ")
          {
             numbr8Rnr_nkl= +numbr8Rnr_nkl + ((+r_q2[i])*mf[i]);
          }


          if(r_t1[i]==" number 10 ")
          {
             numbr10Rnr_nkl= +numbr10Rnr_nkl + ((+r_q1[i])*mf[i]);
          }
          if(r_t2[i]==" number 10 ")
          {
             numbr10Rnr_nkl= +numbr10Rnr_nkl + ((+r_q2[i])*mf[i]);
          }

      } //ifBlue
    } //for

    rnr_String = new String;
  
  //  -- 5 --    -- 5 --    -- 5 --    -- 5 --    
  if(numbr5Rnr_Blk>0 || numbr5Rnr_nkl>0 )
  {
    rnr_String=rnr_String+"5 Number : ";
    if(numbr5Rnr_Blk>0)
    {
     rnr_String = rnr_String + " Black [ " + numbr5Rnr_Blk + " ]";
    }
    if(numbr5Rnr_nkl>0)
    {
     rnr_String = rnr_String + "          Nickel [ " + numbr5Rnr_nkl + " ]";
    }
  }

  //  -- 8 --    -- 8 --    -- 8 --    -- 8 --    
  if(numbr8Rnr_Blk>0 || numbr8Rnr_nkl>0 )
  {
    rnr_String=rnr_String+"<br>8 Number : ";
    if(numbr8Rnr_Blk>0)
    {
     rnr_String = rnr_String + " Black [ " + numbr8Rnr_Blk + " ]";
    }
    if(numbr8Rnr_nkl>0)
    {
     rnr_String = rnr_String + "          Nickel [ " + numbr8Rnr_nkl + " ]";
    }
  }

  //  -- 10 --    -- 10 --    -- 10 --    -- 10 --    
  if(numbr10Rnr_Blk>0 || numbr10Rnr_nkl>0 )
  {
    rnr_String=rnr_String+"<br>10 Number : ";
    if(numbr10Rnr_Blk>0)
    {
     rnr_String = rnr_String + " Black [ " + numbr10Rnr_Blk + " ]";
    }
    if(numbr10Rnr_nkl>0)
    {
     rnr_String = rnr_String + "          Nickel [ " + numbr10Rnr_nkl + " ]";
    }
  }
  
  document.getElementById("dvrner").innerHTML=rnr_String;
}