CP = cp -f
MAKE = make
DROPBOXGAMEFODER = /files/Dropbox/FSA-Trabalhos/quarto\ ano/Mídias/jogo\ -\ jogando\ e\ aprendendo/
WORKINGGAMEFODER = /files/codes/jep/jep/resources/

send:
	$(CP) $(WORKINGGAMEFODER)*.png $(DROPBOXGAMEFODER)
	$(CP) $(WORKINGGAMEFODER)*.txt $(DROPBOXGAMEFODER)

retrieve:
	$(CP) $(DROPBOXGAMEFODER)*.txt $(WORKINGGAMEFODER)
	$(CP) $(DROPBOXGAMEFODER)*.png $(WORKINGGAMEFODER)
