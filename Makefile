CP = cp -f
MAKE = make
DROPBOXGAMEFODER = /files/Dropbox/FSA-Trabalhos/quarto\ ano/Mídias/jogo\ -\ jogando\ e\ aprendendo/
WORKINGGAMEFODER = /files/codes/jep/jep/resources/

send:
	$(CP) $(WORKINGGAMEFODER)*.png $(DROPBOXGAMEFODER)

retrieve:
	$(CP) $(DROPBOXGAMEFODER)*.png $(WORKINGGAMEFODER)
