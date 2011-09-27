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
vendor:
	bundle install --deployment --without=test
	tar czvf vendor.tar.gz .bundle vendor
	scp vendor.tar.gz pothix:~/jogandoeaprendendo.com.br
	ssh pothix 'cd ~/jogandoeaprendendo.com.br/; rm -rf vendor .bundle; tar xvf vendor.tar.gz; touch tmp/restart.txt'
	rm vendor.tar.gz
