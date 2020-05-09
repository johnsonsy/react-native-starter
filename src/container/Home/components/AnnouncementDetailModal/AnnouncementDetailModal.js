import React from 'react';
import {View, Modal, ScrollView, Image,Dimensions} from 'react-native';
import {useStores} from '@store';
import {Page, Header, Text, Separator} from '@components';
import {observer} from 'mobx-react';
import {logo} from '@image';
import style from '@styles/globalStyle';
const {headerStyle, container, descriptionStyle} = style;
import HTML from 'react-native-render-html';
const AnnouncementDetailModal = () => {
  const {visible, reset, title, content, time, currentType} = useStores()[
    'AnnouncementDetailModalStore'
  ];

  return (
    <Modal transparent={false} visible={visible}>
      <Page isModal>
        <Header
          headerText={currentType === 'announcement' ? '最新公告' : '個人消息'}
          backFunction={reset}
        />
        <ScrollView>
          <View style={container}>
            <Text style={headerStyle}> {title} </Text>
            <Text style={{...descriptionStyle}}> {time} </Text>
            <HTML html={content} imagesMaxWidth={Dimensions.get('window').width} />
            <Separator horizontal />
          </View>
          <View style={{alignItems: 'center'}}>
            <Image source={logo} style={{height: 30, width: 30}} />
          </View>
        </ScrollView>
      </Page>
    </Modal>
  );
};

export default observer(AnnouncementDetailModal);
