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
deploy:
	echo "==========> Bundling gems"
	bundle install --deployment --without=test
	echo "==========> Generating the tar file"
	tar czvf vendor.tar.gz .bundle vendor
	echo "==========> Copying the tar file"
	scp score.tar.gz pothix:~/score.jogandoeaprendendo.com.br
	echo "==========> Extracting the tar file"
	ssh pothix 'cd ~/jogandoeaprendendo.com.br/; rm -rf vendor .bundle; tar xvf vendor.tar.gz; touch tmp/restart.txt'
	rm vendor.tar.gz
	echo "==========> Deploy OK"
